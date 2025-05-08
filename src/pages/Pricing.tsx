
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "One-on-One Tutoring",
      description: "Personalized attention and customized learning for individual students.",
      price: "$45",
      duration: "per hour",
      popular: false,
      features: [
        "Completely personalized learning",
        "Focused attention on student needs",
        "Flexible scheduling options",
        "Customized homework and practice",
        "Regular progress reports",
        "Detailed feedback after each session"
      ]
    },
    {
      name: "Small Group Sessions",
      description: "Collaborative learning in groups of 2-3 students.",
      price: "$30",
      duration: "per hour/student",
      popular: true,
      features: [
        "2-3 students per group",
        "Peer learning opportunities",
        "Collaborative problem solving",
        "Customized group exercises",
        "Flexible scheduling options",
        "Regular progress reports"
      ]
    },
    {
      name: "Study Group",
      description: "Larger group sessions for review and exam preparation.",
      price: "$25",
      duration: "per hour/student",
      popular: false,
      features: [
        "4-5 students per group",
        "Topic-focused sessions",
        "Exam preparation techniques",
        "Shared learning materials",
        "Fixed weekly schedule",
        "Monthly progress summaries"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long are the tutoring sessions?",
      answer: "Our standard sessions are 60 minutes long. However, we offer flexibility based on the student's needs and attention span. For younger students, we may recommend shorter, more frequent sessions."
    },
    {
      question: "How often should my child attend tutoring?",
      answer: "We typically recommend 1-2 sessions per week for consistent progress. The exact frequency depends on the student's needs, goals, and current academic standing. We'll discuss the optimal schedule during your initial consultation."
    },
    {
      question: "Do you offer any discounts?",
      answer: "Yes, we offer sibling discounts and package deals for multiple sessions booked in advance. We also provide discounted rates for students who commit to regular weekly sessions throughout the school term."
    },
    {
      question: "What if my child needs to miss a session?",
      answer: "We understand that circumstances can change. With at least 24 hours' notice, we can reschedule the session at no additional charge. Last-minute cancellations (less than 24 hours) may incur a 50% fee."
    },
    {
      question: "How do you match tutors with students?",
      answer: "We carefully match tutors with students based on the subject, academic level, learning style, and personality. We want to ensure not just academic compatibility but also a positive and productive working relationship."
    },
    {
      question: "Can I change tutors if it's not a good fit?",
      answer: "Absolutely. We want your child to have the best possible experience. If you feel the current tutor isn't the right fit, we'll gladly arrange for an alternative tutor at no extra cost."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Affordable Tuition Plans</h1>
              <p className="text-lg text-gray-700 mb-8">
                Investing in your child's education with transparent and competitive pricing options.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg border ${plan.popular ? 'border-primary shadow-xl relative' : 'border-gray-100'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-sm font-bold py-1 px-3 rounded-bl">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500"> {plan.duration}</span>
                    </div>
                    <Link to="/contact" className="block">
                      <Button className={`w-full ${plan.popular ? 'btn-primary' : 'bg-gray-800 hover:bg-gray-700'}`}>
                        Get Started
                      </Button>
                    </Link>
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Options</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer specialized services to meet specific educational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Exam Preparation Package</h3>
                <p className="text-gray-600 mb-4">Intensive review sessions focused on upcoming exams.</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$200</span>
                  <span className="text-gray-500"> for 5 sessions</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Targeted exam strategies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Practice with past papers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Time management techniques</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Subject Catch-Up Course</h3>
                <p className="text-gray-600 mb-4">Intensive program to help students catch up in challenging subjects.</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$350</span>
                  <span className="text-gray-500"> for 10 sessions</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Initial assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Customized learning plan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Progress monitoring</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Holiday Study Programs</h3>
                <p className="text-gray-600 mb-4">Maintain academic momentum during school breaks.</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold">$400</span>
                  <span className="text-gray-500"> for 2-week program</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Daily sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Multiple subjects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">Small group format</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our tutoring services and pricing.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation to discuss your child's needs and find the perfect tutoring plan.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-blue-50">Book a Free Consultation</Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
