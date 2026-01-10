import React from 'react';
import { Search, UserCheck, CalendarDays, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Find a Service",
    desc: "Browse our wide range of professional care services and select the one that fits your needs.",
    icon: <Search className="w-8 h-8 text-primary" />,
    color: "bg-purple-100",
  },
  {
    title: "Choose Caregiver",
    desc: "View profiles of our verified and expert caregivers to find the perfect match for your family.",
    icon: <UserCheck className="w-8 h-8 text-pink-500" />,
    color: "bg-pink-100",
  },
  {
    title: "Book & Relax",
    desc: "Schedule your service and complete the booking. Our caregiver will arrive right on time.",
    icon: <CalendarDays className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100",
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#FDFCFE] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">
            Step by Step
          </span>
          <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            How To Get Started <br />
            <span className="text-primary">With Hevana</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Taking care of your loved ones is now easier than ever. Just follow these simple steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Connecting Line (Only for Desktop) */}
          <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-gray-200"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">

              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-primary font-bold z-20">
                {index + 1}
              </div>

              {/* Icon Circle */}
              <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center mb-8 relative z-10 ring-8 ring-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="font-fredoka text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {step.desc}
              </p>

              {/* Mobile Arrow (Show on mobile between steps) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden my-8 text-gray-300">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-10 rounded-2xl transition-all shadow-md active:scale-95">
                Ready to Start? Book Now
            </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
