
import React from 'react';
import { Star, User, Home } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <User className="h-12 w-12 text-primary p-2 bg-blue-100 rounded-full" />,
      title: "Experienced Ghanaian Tutors",
      description: "Our educators have years of experience in the Ghanaian education system and proven track records of improving student performance."
    },
    {
      icon: <Home className="h-12 w-12 text-primary p-2 bg-blue-100 rounded-full" />,
      title: "Comfortable Learning Environment",
      description: "Our home-based setting creates a relaxed atmosphere where students feel at ease to learn and ask questions."
    },
    {
      icon: <Star className="h-12 w-12 text-primary p-2 bg-blue-100 rounded-full" />,
      title: "Proven Results",
      description: "Our students consistently show improvement in their BECE and WASSCE results, gain confidence in their academic abilities, and many proceed to Brainbridge Montessori Training Center for further education."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Scholar Pathway?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional educational support that helps Ghanaian students thrive academically and personally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Approach to Learning</h3>
              <p className="text-gray-600 mb-6">
                At Scholar Pathway, we offer one-on-one tutoring for students from age 4 to university level, available on weekdays and weekends:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Personalized one-on-one sessions tailored to each student's needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Flexible scheduling on both weekdays and weekends</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Comprehensive support for all age groups, from 4 years to university</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Building confidence for success in the Ghanaian educational system</span>
                </li>
              </ul>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1613145358168-215421060129')] bg-cover bg-center h-64 md:h-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
