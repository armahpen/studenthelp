
import React from 'react';
import { Book, Users, Clock, Calendar, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Book className="h-10 w-10 text-primary" />,
      title: "Personalized Learning Plans",
      description: "Customized academic support tailored to each student's unique strengths and areas for improvement.",
      features: [
        "Individual skill assessment",
        "Customized learning strategies",
        "Regular progress tracking"
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Small Group Sessions",
      description: "Collaborative learning environment with limited students per class for optimal attention.",
      features: [
        "Maximum 5 students per group",
        "Peer learning opportunities",
        "Affordable group rates"
      ]
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Flexible Scheduling",
      description: "Convenient timing options to accommodate busy student and family schedules.",
      features: [
        "Weekday and weekend options",
        "After-school timings",
        "Holiday programs available"
      ]
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "One-on-One Tutoring",
      description: "Focused individual attention to address specific academic challenges and goals.",
      features: [
        "Undivided instructor attention",
        "Tailored pace of learning",
        "Personalized teaching methods"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of personalized academic support services to help students achieve their best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card hover:-translate-y-1 transition-all bg-white"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
