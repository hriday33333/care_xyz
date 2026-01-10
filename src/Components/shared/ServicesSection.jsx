import React from 'react';
import { Baby, Heart, Stethoscope, ShieldPlus, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Baby Care",
    desc: "Professional nannies to provide your little ones with the love and safety they deserve.",
    icon: <Baby className="w-8 h-8 text-pink-500" />,
    bgColor: "bg-pink-50",
    borderColor: "hover:border-pink-200"
  },
  {
    title: "Elderly Care",
    desc: "Compassionate support and medical assistance for seniors to live a dignified life.",
    icon: <Heart className="w-8 h-8 text-purple-500" />,
    bgColor: "bg-purple-50",
    borderColor: "hover:border-purple-200"
  },
  {
    title: "Medical Support",
    desc: "Home nursing and therapy services by certified healthcare professionals.",
    icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-50",
    borderColor: "hover:border-blue-200"
  },
  {
    title: "Special Care",
    desc: "Dedicated care plans for individuals with special needs or chronic conditions.",
    icon: <ShieldPlus className="w-8 h-8 text-green-500" />,
    bgColor: "bg-green-50",
    borderColor: "hover:border-green-200"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm border-l-4 border-primary pl-3">
              What We Offer
            </span>
            <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Quality Care Services <br />
              <span className="text-primary">Tailored To Your Needs</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-900 font-bold hover:text-primary transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-[2.5rem] border-2 border-transparent ${service.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white shadow-sm border-gray-50`}
            >
              {/* Icon Box */}
              <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-fredoka text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Action */}
              <button className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View Button */}
        <div className="mt-12 md:hidden flex justify-center">
           <button className="flex items-center gap-2 text-gray-900 font-bold">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
