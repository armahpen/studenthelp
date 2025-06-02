import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, Check, Globe, GraduationCap } from 'lucide-react';

const Subjects = () => {
  const primarySubjects = [
    {
      name: "Mathematics",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>,
      description: "Building strong foundations in numbers, operations, and basic problem-solving.",
      topics: ["Number recognition and counting", "Addition and subtraction", "Multiplication tables", "Basic fractions", "Simple geometry"]
    },
    {
      name: "English",
      icon: <Book className="h-10 w-10 text-primary" />,
      description: "Developing essential reading, writing, and communication skills.",
      topics: ["Phonics and word recognition", "Reading comprehension", "Grammar basics", "Creative writing", "Vocabulary building"]
    },
    {
      name: "Science",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      description: "Exploring the natural world through observation and basic experiments.",
      topics: ["Plants and animals", "Weather and seasons", "The human body", "Basic earth science", "Simple experiments"]
    },
    {
      name: "Social Studies",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>,
      description: "Learning about communities, history, and geography in an engaging way.",
      topics: ["Local community", "Basic geography", "Historical figures", "Cultural awareness", "Citizenship"]
    }
  ];

  const secondarySubjects = [
    {
      name: "Advanced Mathematics",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
      description: "Developing critical thinking through more complex mathematical concepts.",
      topics: ["Algebra and equations", "Geometry and trigonometry", "Statistics and probability", "Functions and graphs", "Pre-calculus concepts"]
    },
    {
      name: "English Literature & Language",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
      description: "Analyzing texts and developing advanced writing and critical thinking skills.",
      topics: ["Literary analysis", "Essay writing", "Advanced grammar", "Public speaking", "Research papers"]
    },
    {
      name: "Biology",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
      description: "Exploring life sciences from cells to ecosystems with practical applications.",
      topics: ["Cell biology", "Human anatomy", "Genetics", "Ecology", "Evolution"]
    },
    {
      name: "Chemistry",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 7.5h6.38"></path><path d="M3.62 7.5H10"></path><path d="M10 15.32v6.68"></path><path d="M14 15.32v6.68"></path><path d="M8.5 22h7"></path><path d="M3.62 16.5H10"></path><path d="M14 16.5h6.38"></path></svg>,
      description: "Understanding matter, its properties, and transformations through experiments.",
      topics: ["Atomic structure", "Chemical bonding", "Periodic table", "Reactions and equations", "Organic chemistry"]
    },
    {
      name: "Physics",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 0 0-6-9"></path><path d="M8 16v-5a3 3 0 0 0-6 0v1a10 10 0 0 0 6 9"></path></svg>,
      description: "Discovering the fundamental laws that govern the physical world.",
      topics: ["Mechanics", "Electricity and magnetism", "Waves and optics", "Thermodynamics", "Modern physics"]
    },
    {
      name: "History",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      description: "Analyzing past events and their impact on our world today.",
      topics: ["World history", "National history", "Historical analysis", "Source evaluation", "Research methods"]
    },
    {
      name: "Geography",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path></svg>,
      description: "Understanding our world's physical features and human interactions.",
      topics: ["Physical geography", "Human geography", "Map reading", "Environmental issues", "Geopolitics"]
    },
    {
      name: "Foreign Languages",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
      description: "Learning new languages with an emphasis on practical communication skills.",
      topics: ["Spanish", "French", "Mandarin", "Reading and writing", "Conversation practice"]
    }
  ];

  const cambridgePrograms = [
    {
      level: "Primary (Grades 1-6)",
      description: "Cambridge Primary curriculum for ages 5-11, providing a solid foundation for future learning.",
      subjects: ["English", "Mathematics", "Science", "Global Perspectives"],
      features: ["International curriculum", "Progressive learning stages", "Regular assessments", "Critical thinking focus"]
    },
    {
      level: "Secondary (Grades 7-11)",
      description: "Cambridge Lower Secondary and IGCSE programs preparing students for advanced studies.",
      subjects: ["Core subjects", "Language options", "Sciences", "Humanities", "Creative arts"],
      features: ["IGCSE qualifications", "Internationally recognized", "Flexible subject choices", "University preparation"]
    },
    {
      level: "Advanced Level (Grades 12-13)",
      description: "Cambridge AS and A Level programs for university entrance and career preparation.",
      subjects: ["AS Level subjects", "A Level subjects", "Extended essays", "Independent research"],
      features: ["University entrance qualification", "Subject specialization", "Critical analysis skills", "Global recognition"]
    }
  ];

  const montessoriLevels = [
    {
      level: "Lower Elementary (Ages 6-9)",
      grades: "Grade 1-3 Equivalent",
      description: "Child-centered approach focusing on hands-on learning and self-directed activities.",
      focus: ["Mixed-age classrooms", "Self-paced learning", "Concrete to abstract concepts", "Independence building"]
    },
    {
      level: "Upper Elementary (Ages 9-12)",
      grades: "Grade 4-6 Equivalent", 
      description: "Developing reasoning abilities and exploring the interconnectedness of all knowledge.",
      focus: ["Cosmic education", "Research projects", "Collaborative learning", "Critical thinking"]
    },
    {
      level: "Middle School (Ages 12-15)",
      grades: "Grade 7-9 Equivalent",
      description: "Supporting adolescent development through meaningful work and community involvement.",
      focus: ["Practical life skills", "Community service", "Leadership development", "Academic excellence"]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Educational Systems & Subjects</h1>
              <p className="text-lg text-gray-700 mb-6">
                We offer comprehensive tutoring across multiple educational systems including Ghanaian national curriculum, Cambridge International, and Montessori methods.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#ghanaian" className="bg-white text-primary px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  Ghanaian Curriculum
                </a>
                <a href="#cambridge" className="bg-white text-primary px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  Cambridge International
                </a>
                <a href="#montessori" className="bg-white text-primary px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  Montessori Method
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Teaching Approach</h2>
                <p className="text-gray-600 mb-4">
                  At Scholar Pathway, we believe in a holistic approach to education that goes beyond simply teaching to the test.
                </p>
                <p className="text-gray-600 mb-4">
                  Our tutors work to develop a deep understanding of concepts, critical thinking skills, and a genuine interest in the subject matter, all while ensuring students meet their academic requirements.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">Customized lesson plans based on individual needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">Engaging, interactive teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">Regular progress assessments and feedback</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">Focus on building fundamental understanding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">Study skills and exam preparation strategies</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/5f523548-953c-4157-b72b-945061ac0fba.png" 
                  alt="Teacher writing mathematical equations on blackboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cambridge International Education */}
        <section id="cambridge" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Cambridge International Education</h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive support for the Cambridge International curriculum, offering globally recognized qualifications that prepare students for success anywhere in the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cambridgePrograms.map((program, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{program.level}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <h4 className="font-semibold mb-2">Subject Areas:</h4>
                  <ul className="space-y-2 mb-4">
                    {program.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{subject}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Montessori Education */}
        <section id="montessori" className="py-16 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Montessori Method</h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience the child-centered Montessori approach that fosters independence, creativity, and a lifelong love of learning through hands-on exploration and self-directed activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {montessoriLevels.map((level, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">{level.level}</h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">{level.grades}</p>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  
                  <h4 className="font-semibold mb-2">Learning Focus:</h4>
                  <ul className="space-y-2">
                    {level.focus.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ghanaian National Curriculum - Primary School Subjects */}
        <section id="ghanaian" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ghanaian National Curriculum - Primary School</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive support for the core primary school curriculum, helping young learners build strong foundations for future academic success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {primarySubjects.map((subject, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {subject.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{subject.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <h4 className="font-semibold mb-2">Topics covered:</h4>
                  <ul className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ghanaian National Curriculum - Secondary School Subjects */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ghanaian National Curriculum - Secondary School</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our tutoring for secondary students is designed to deepen understanding of more complex subjects, prepare for exams, and build critical thinking skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondarySubjects.map((subject, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-bold">{subject.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <h4 className="font-semibold mb-2">Topics covered:</h4>
                  <ul className="space-y-2">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Learning?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our multi-system tutoring approach can help your child excel in their studies.
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

export default Subjects;
