
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would submit this data to your backend
    toast({
      title: "Form submitted successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentGrade" className="block text-sm font-medium text-gray-700 mb-1">
                      Student's Grade/Year
                    </label>
                    <select
                      id="studentGrade"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Grade/Year</option>
                      <option value="grade1">Grade 1</option>
                      <option value="grade2">Grade 2</option>
                      <option value="grade3">Grade 3</option>
                      <option value="grade4">Grade 4</option>
                      <option value="grade5">Grade 5</option>
                      <option value="grade6">Grade 6</option>
                      <option value="year7">Year 7</option>
                      <option value="year8">Year 8</option>
                      <option value="year9">Year 9</option>
                      <option value="year10">Year 10</option>
                      <option value="year11">Year 11</option>
                      <option value="year12">Year 12</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <input
                      type="text"
                      id="level"
                      required
                      placeholder="Enter your level (e.g. Beginner, Intermediate, Advanced)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-1">
                      Subjects Interested In
                    </label>
                    <select
                      id="subjects"
                      required
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      size={3}
                    >
                      <option value="math">Mathematics</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                      <option value="languages">Foreign Languages</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple subjects</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your child's needs, goals, or any specific questions you have..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
                      Subscribe to our newsletter for educational tips and updates
                    </label>
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    Submit
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-gray-50 rounded-lg shadow-lg p-8 mb-8">
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
                    <Button className="btn-primary w-full">Schedule Consultation</Button>
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
