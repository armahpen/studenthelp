
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Shield, Award, Users, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherRecruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Teaching Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Become a certified teacher on our platform. Take our comprehensive assessment to teach students from Grade 1-12 across Cambridge, Montessori, and GES curricula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/teacher-aptitude-test">
              <Button size="lg" className="min-w-[200px]">
                Start Assessment
              </Button>
            </Link>
            <Link to="/admin-login">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Admin Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Assessment Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>1. Aptitude Test</CardTitle>
                <CardDescription>
                  General pedagogy, classroom management, and teaching ability assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Teaching methodology</li>
                  <li>• Logical reasoning</li>
                  <li>• Ethics & classroom management</li>
                  <li>• Basic subject knowledge</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-secondary" />
                </div>
                <CardTitle>2. Curriculum Selection</CardTitle>
                <CardDescription>
                  Choose your preferred curriculum and grade levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="outline">Cambridge</Badge>
                  <Badge variant="outline">Montessori</Badge>
                  <Badge variant="outline">GES</Badge>
                </div>
                <p className="text-sm text-gray-600">Select grades you're confident teaching</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle>3. Subject Exam</CardTitle>
                <CardDescription>
                  Curriculum-specific assessment based on your selections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Subject-specific questions</li>
                  <li>• Grade-appropriate content</li>
                  <li>• Secure exam environment</li>
                  <li>• Auto & manual grading</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Support */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Curricula</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Cambridge</CardTitle>
                <CardDescription>International curriculum standards</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Primary (Grades 1-6)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Lower Secondary (Grades 7-9)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Upper Secondary (Grades 10-12)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-secondary">Montessori</CardTitle>
                <CardDescription>Child-centered educational approach</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Casa (Ages 3-6)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Elementary I (Ages 6-9)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Elementary II (Ages 9-12)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">GES</CardTitle>
                <CardDescription>Ghana Education Service curriculum</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Basic 1-6 (Primary)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    JHS 1-3 (Junior High)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    SHS 1-3 (Senior High)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Secure Testing Environment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Browser Lock</h3>
              <p className="text-sm text-gray-600">Full-screen mode with tab switching detection</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Violation Tracking</h3>
              <p className="text-sm text-gray-600">Real-time monitoring and logging</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Question Randomization</h3>
              <p className="text-sm text-gray-600">Randomized question and answer order</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Auto Grading</h3>
              <p className="text-sm text-gray-600">Instant results with manual review option</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Teaching Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your assessment today and become a certified teacher on our platform
          </p>
          <Link to="/teacher-aptitude-test">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Begin Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeacherRecruitment;
