
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const TeacherAptitudeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [violations, setViolations] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const questions = [
    {
      id: 1,
      type: 'mcq',
      question: "What is the most effective way to handle a disruptive student in class?",
      options: [
        "Immediately remove them from class",
        "Ignore the behavior and continue teaching",
        "Address the behavior calmly and redirect their attention",
        "Publicly call out their behavior in front of other students"
      ],
      correct: 2
    },
    {
      id: 2,
      type: 'mcq',
      question: "Which learning theory emphasizes hands-on, experiential learning?",
      options: [
        "Behaviorism",
        "Constructivism",
        "Cognitivism",
        "Humanism"
      ],
      correct: 1
    },
    {
      id: 3,
      type: 'mcq',
      question: "What is the primary goal of differentiated instruction?",
      options: [
        "To teach all students the same way",
        "To meet diverse learning needs of students",
        "To reduce teacher workload",
        "To standardize learning outcomes"
      ],
      correct: 1
    },
    {
      id: 4,
      type: 'essay',
      question: "Describe your approach to creating an inclusive classroom environment. How would you ensure all students feel valued and engaged? (Minimum 150 words)"
    },
    {
      id: 5,
      type: 'mcq',
      question: "Which assessment method provides ongoing feedback during the learning process?",
      options: [
        "Summative assessment",
        "Formative assessment",
        "Diagnostic assessment",
        "Standardized assessment"
      ],
      correct: 1
    }
  ];

  // Anti-cheating measures
  useEffect(() => {
    if (!testStarted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setViolations(prev => prev + 1);
        toast({
          title: "Warning",
          description: "Tab switching detected. This violation has been logged.",
          variant: "destructive"
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable common shortcuts
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 'c') ||
        (e.ctrlKey && e.key === 'v')
      ) {
        e.preventDefault();
        setViolations(prev => prev + 1);
        toast({
          title: "Action Blocked",
          description: "This action is not allowed during the test.",
          variant: "destructive"
        });
      }
    };

    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      setViolations(prev => prev + 1);
      toast({
        title: "Action Blocked",
        description: "Right-click is disabled during the test.",
        variant: "destructive"
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, [testStarted, toast]);

  // Timer
  useEffect(() => {
    if (!testStarted || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const enterFullScreen = async () => {
    try {
      await document.documentElement.requestFullscreen();
      setIsFullScreen(true);
      setTestStarted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Please enable full-screen mode to start the test.",
        variant: "destructive"
      });
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    // Calculate score
    const mcqQuestions = questions.filter(q => q.type === 'mcq');
    const correctAnswers = mcqQuestions.filter((q, index) => {
      const questionIndex = questions.indexOf(q);
      return parseInt(answers[questionIndex]) === q.correct;
    }).length;
    
    const score = (correctAnswers / mcqQuestions.length) * 100;
    
    if (score >= 70) {
      navigate('/curriculum-selection', { 
        state: { 
          aptitudeScore: score,
          violations: violations,
          essayAnswers: Object.entries(answers)
            .filter(([index]) => questions[parseInt(index)].type === 'essay')
            .map(([index, answer]) => ({ question: questions[parseInt(index)].question, answer }))
        }
      });
    } else {
      toast({
        title: "Test Not Passed",
        description: `You scored ${score.toFixed(1)}%. A minimum of 70% is required to proceed.`,
        variant: "destructive"
      });
      setTimeout(() => navigate('/teacher-recruitment'), 3000);
    }
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Teacher Aptitude Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Testing Environment</h3>
              <p className="text-gray-600 mb-4">
                This test must be taken in full-screen mode. Any violations will be tracked.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Important Instructions:</h4>
                  <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                    <li>• Do not switch tabs or leave full-screen mode</li>
                    <li>• Right-click and keyboard shortcuts are disabled</li>
                    <li>• You have 60 minutes to complete the test</li>
                    <li>• Minimum 70% score required to proceed</li>
                    <li>• Multiple violations may disqualify you</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button onClick={enterFullScreen} className="w-full" size="lg">
              Start Test (Enter Full Screen)
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">Time Left: {formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              {violations > 0 && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm">Violations: {violations}</span>
                </div>
              )}
            </div>
          </div>
          <Progress value={progress} className="mt-3" />
        </div>

        {/* Question */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Question {currentQuestion + 1}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{currentQ.question}</p>

            {currentQ.type === 'mcq' ? (
              <RadioGroup
                value={answers[currentQuestion] || ''}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <Textarea
                placeholder="Type your answer here..."
                value={answers[currentQuestion] || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                className="min-h-[200px]"
              />
            )}

            <div className="flex justify-between pt-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>
              
              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmitTest} className="bg-green-600 hover:bg-green-700">
                  Submit Test
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherAptitudeTest;
