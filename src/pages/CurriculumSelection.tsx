
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, BookOpen, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const CurriculumSelection = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState('');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const aptitudeScore = location.state?.aptitudeScore || 0;

  const curricula = {
    cambridge: {
      name: 'Cambridge',
      description: 'International curriculum with global standards',
      color: 'bg-blue-500',
      grades: [
        { id: 'primary', label: 'Primary (Grades 1-6)', subjects: ['English', 'Mathematics', 'Science', 'ICT'] },
        { id: 'lower-secondary', label: 'Lower Secondary (Grades 7-9)', subjects: ['English', 'Mathematics', 'Science', 'ICT', 'History', 'Geography'] },
        { id: 'upper-secondary', label: 'Upper Secondary (Grades 10-12)', subjects: ['English', 'Mathematics', 'Science', 'ICT', 'Business Studies', 'Economics'] }
      ]
    },
    montessori: {
      name: 'Montessori',
      description: 'Child-centered educational approach',
      color: 'bg-green-500',
      grades: [
        { id: 'casa', label: 'Casa (Ages 3-6)', subjects: ['Practical Life', 'Sensorial', 'Language', 'Mathematics', 'Cultural Studies'] },
        { id: 'elementary-1', label: 'Elementary I (Ages 6-9)', subjects: ['Language Arts', 'Mathematics', 'Geometry', 'Geography', 'History', 'Biology'] },
        { id: 'elementary-2', label: 'Elementary II (Ages 9-12)', subjects: ['Language Arts', 'Mathematics', 'Geometry', 'Physical Sciences', 'History', 'Geography'] }
      ]
    },
    ges: {
      name: 'GES (Ghana Education Service)',
      description: 'National curriculum of Ghana',
      color: 'bg-red-500',
      grades: [
        { id: 'basic-1-6', label: 'Basic 1-6 (Primary)', subjects: ['English Language', 'Mathematics', 'Science', 'Social Studies', 'ICT'] },
        { id: 'jhs', label: 'JHS 1-3 (Junior High)', subjects: ['English Language', 'Mathematics', 'Science', 'Social Studies', 'ICT', 'French'] },
        { id: 'shs', label: 'SHS 1-3 (Senior High)', subjects: ['Core Mathematics', 'English Language', 'Science', 'Social Studies', 'ICT', 'Elective Mathematics'] }
      ]
    }
  };

  const handleGradeToggle = (gradeId: string) => {
    setSelectedGrades(prev =>
      prev.includes(gradeId)
        ? prev.filter(id => id !== gradeId)
        : [...prev, gradeId]
    );
  };

  const handleProceed = () => {
    if (!selectedCurriculum) {
      toast({
        title: "Selection Required",
        description: "Please select a curriculum to continue.",
        variant: "destructive"
      });
      return;
    }

    if (selectedGrades.length === 0) {
      toast({
        title: "Grade Selection Required",
        description: "Please select at least one grade level to teach.",
        variant: "destructive"
      });
      return;
    }

    navigate('/subject-exam', {
      state: {
        curriculum: selectedCurriculum,
        grades: selectedGrades,
        aptitudeScore
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Congratulations!
          </h1>
          <p className="text-gray-600 mb-4">
            You passed the aptitude test with a score of {aptitudeScore.toFixed(1)}%
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Next: Select Your Teaching Preferences
          </Badge>
        </div>

        {/* Curriculum Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Choose Your Preferred Curriculum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCurriculum} onValueChange={setSelectedCurriculum}>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(curricula).map(([key, curriculum]) => (
                  <div key={key} className="relative">
                    <Label htmlFor={key} className="cursor-pointer">
                      <Card className={`transition-all ${selectedCurriculum === key ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={key} id={key} />
                            <div>
                              <h3 className="font-semibold">{curriculum.name}</h3>
                              <p className="text-sm text-gray-600">{curriculum.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Grade Selection */}
        {selectedCurriculum && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Select Grade Levels You Can Teach
              </CardTitle>
              <p className="text-sm text-gray-600">
                Choose the grade levels you feel confident teaching in the {curricula[selectedCurriculum as keyof typeof curricula].name} curriculum
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {curricula[selectedCurriculum as keyof typeof curricula].grades.map((grade) => (
                  <div key={grade.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={grade.id}
                        checked={selectedGrades.includes(grade.id)}
                        onCheckedChange={() => handleGradeToggle(grade.id)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={grade.id} className="text-base font-medium cursor-pointer">
                          {grade.label}
                        </Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {grade.subjects.map((subject) => (
                            <Badge key={subject} variant="outline" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Summary & Proceed */}
        {selectedCurriculum && selectedGrades.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Selection Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Curriculum:</h4>
                  <Badge className={curricula[selectedCurriculum as keyof typeof curricula].color}>
                    {curricula[selectedCurriculum as keyof typeof curricula].name}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Grade Levels ({selectedGrades.length}):</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedGrades.map((gradeId) => {
                      const grade = curricula[selectedCurriculum as keyof typeof curricula].grades.find(g => g.id === gradeId);
                      return (
                        <Badge key={gradeId} variant="secondary">
                          {grade?.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <Button onClick={handleProceed} className="w-full" size="lg">
                  Proceed to Subject Examination
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CurriculumSelection;
