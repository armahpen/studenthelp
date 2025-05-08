
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Academic Journey?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book a free consultation today and discover how we can help your child excel in their studies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-blue-50 text-base px-8 py-6">Book a Free Consultation</Button>
            </Link>
            <Link to="/subjects">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">View Our Subjects</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
