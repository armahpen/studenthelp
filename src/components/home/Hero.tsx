
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Personalized Learning For <span className="text-primary">Academic Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Scholar Pathway provides personalized academic support for students in primary and secondary school, helping them reach their full potential in a nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-primary text-base px-8 py-6">Book a Free Consultation</Button>
            </Link>
            <Link to="/subjects">
              <Button variant="outline" className="btn-outline text-base px-8 py-6">Explore Subjects</Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-xl text-primary">100+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-xl text-primary">8+</h3>
              <p className="text-gray-600">Subjects</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-xl text-primary">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <h3 className="font-bold text-xl text-primary">92%</h3>
              <p className="text-gray-600">Grade Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
