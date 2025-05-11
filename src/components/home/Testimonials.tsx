
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "My daughter's grades improved dramatically after just two months with Student Learn. The personalized approach really made a difference in her confidence and understanding of mathematics.",
      author: "Abena Mensah",
      relation: "Parent of JHS 2 Student"
    },
    {
      content: "The tutors at Student Learn have been incredible. They make learning fun and interactive. I actually look forward to my science sessions now!",
      author: "Kwame Osei",
      relation: "SHS 1 Student"
    },
    {
      content: "We tried several tutoring services before finding Student Learn, and the difference is remarkable. The small group setting works perfectly for my son who was reluctant to participate in larger classes.",
      author: "Kofi Adu",
      relation: "Parent of Primary 6 Student"
    },
    {
      content: "I was struggling with English literature until I joined Student Learn. My tutor helped me understand how to analyze texts and write essays properly. I improved from a D to a B in just one term!",
      author: "Ama Darko",
      relation: "SHS 3 Student"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students & Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students and their parents have to say about Student Learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h4 className="font-bold">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.relation}</p>
              </div>
              <div className="relative">
                <svg className="absolute top-0 left-0 h-8 w-8 text-gray-200 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
