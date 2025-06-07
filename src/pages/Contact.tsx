
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg text-gray-700">
                We're here to answer your questions and help your child achieve academic success.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">0596788173</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@studenthelp.cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Hours</h3>
                        <p className="text-gray-600">Monday-Friday: 3pm-8pm</p>
                        <p className="text-gray-600">Saturday: 9am-5pm</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Consultation */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Free Consultation</h2>
                  <p className="text-gray-600 mb-6">
                    Book a free 30-minute consultation to discuss your child's academic needs and how we can help. During this session, we'll:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Assess your child's academic needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Discuss your goals and expectations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Recommend a personalized tutoring plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Answer any questions you may have</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-gray-700 font-semibold mb-2">No obligation, just helpful guidance.</p>
                    <a 
                      href="https://teachers.studenthelp.cloud/parent/register" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="btn-primary w-full">Register now</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
