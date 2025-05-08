
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check } from 'lucide-react';

const About = () => {
  const tutors = [
    {
      name: "Dr. Sarah Miller",
      role: "Lead Mathematics Tutor",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      bio: "Ph.D. in Mathematics with 10+ years of teaching experience. Specializes in making complex math concepts accessible to students of all levels.",
      subjects: ["Algebra", "Calculus", "Statistics"]
    },
    {
      name: "James Wilson",
      role: "Science Specialist",
      image: "https://randomuser.me/api/portraits/men/37.jpg", 
      bio: "M.Sc. in Physics with a passion for hands-on science education. Believes in learning through experimentation and real-world applications.",
      subjects: ["Physics", "Chemistry", "Biology"]
    },
    {
      name: "Emily Chen",
      role: "English & Humanities Tutor",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "Literature graduate with specialized training in language development. Helps students become confident readers, writers, and critical thinkers.",
      subjects: ["English Literature", "Language Arts", "History"]
    },
    {
      name: "Robert Johnson",
      role: "Social Sciences Instructor",
      image: "https://randomuser.me/api/portraits/men/54.jpg", 
      bio: "Former high school teacher with expertise in geography and history. Makes social sciences engaging through storytelling and interactive methods.",
      subjects: ["Geography", "History", "Social Studies"]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Scholar Pathway</h1>
              <p className="text-lg text-gray-700 mb-8">
                Founded with a passion for education, Scholar Pathway is dedicated to helping students achieve academic excellence through personalized learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Scholar Pathway was founded in 2018 by a group of passionate educators who recognized the need for personalized academic support that goes beyond what's typically available in traditional classroom settings.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as small after-school tutoring sessions has grown into a comprehensive academic support service that has helped hundreds of students improve their grades, boost their confidence, and develop a genuine love for learning.
                </p>
                <p className="text-gray-600">
                  Our home-based approach creates a comfortable, low-pressure environment where students can ask questions freely, work at their own pace, and receive the individual attention they need to thrive academically.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Students learning" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                At Scholar Pathway, we believe every student has the potential to excel academically with the right support, guidance, and learning environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Education</h3>
                <p className="text-gray-600">
                  We're committed to understanding each student's unique learning style and adapting our teaching methods accordingly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Building Confidence</h3>
                <p className="text-gray-600">
                  Beyond academic skills, we focus on helping students develop self-confidence in their abilities to tackle challenges.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Lifelong Learning</h3>
                <p className="text-gray-600">
                  We aim to instill a genuine love for learning that extends beyond the classroom and continues throughout life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Tutors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Tutors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team consists of experienced educators passionate about helping students reach their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tutors.map((tutor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={tutor.image} 
                    alt={tutor.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{tutor.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{tutor.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{tutor.bio}</p>
                    <h4 className="font-semibold text-sm mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutor.subjects.map((subject, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-primary text-xs py-1 px-2 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Excellence</h3>
                      <p className="text-gray-600">We strive for excellence in everything we do, from our teaching methods to our communication with parents.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Empathy</h3>
                      <p className="text-gray-600">We understand that each student faces unique challenges and we approach them with patience and understanding.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Adaptability</h3>
                      <p className="text-gray-600">We adapt our teaching methods to suit different learning styles, ensuring every student can thrive.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Integrity</h3>
                      <p className="text-gray-600">We maintain the highest standards of professionalism and ethics in all our interactions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Student studying" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
