import React from 'react';
import Image from 'next/image';
import { CheckCircle, Play, Heart, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#FDFCFE] overflow-hidden py-16 md:py-24">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side: Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide">
            <Heart className="w-4 h-4 fill-purple-700" />
            TRUSTED BY 2500+ FAMILIES
          </div>

          <h1 className="font-fredoka text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1]">
            Empowering Lives <br />
            With <span className="text-primary relative">
              Expert Care
              {/* Wavy Underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 13C22 13 18 2 38 2C58 2 54 13 74 13C94 13 90 2 110 2C130 2 126 13 146 13" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            From professional nursing to compassionate babysitting, we provide personalized care services that ensure comfort, safety, and peace of mind at home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Book a Service
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 font-bold text-gray-700 hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/5">
                <Play className="w-5 h-5 fill-primary text-primary" />
              </div>
              How It Works
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6">
             <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Verified Caregivers
             </div>
             <div className="w-px h-4 bg-gray-300"></div>
             <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <span className="text-primary">★</span> 4.9/5 Rating
             </div>
          </div>
        </div>

        {/* Right Side: Image with Floating Elements */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative w-full aspect-square md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000"
              alt="Professional Care"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card 1: Experience */}
          <div className="absolute -left-6 bottom-12 bg-white p-4 rounded-2xl shadow-xl animate-bounce animation-delay-1000 hidden md:block border border-purple-50">
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 p-2 rounded-xl text-pink-500 font-bold">15+</div>
              <div className="text-xs font-bold text-gray-700">Years of <br/> Experience</div>
            </div>
          </div>

          {/* Floating Card 2: Satisfied Clients */}
          <div className="absolute -right-6 top-12 bg-white p-4 rounded-2xl shadow-xl animate-pulse hidden md:block border border-purple-50">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-700">Satisfied <br/> Families</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
