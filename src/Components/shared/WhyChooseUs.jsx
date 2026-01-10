import { Banknote, Check, Clock, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Verified Caregivers',
    desc: 'Every caregiver goes through a multi-level background check and training.',
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
  },
  {
    title: 'Affordable Pricing',
    desc: "Quality care shouldn't be a luxury. We offer competitive rates for everyone.",
    icon: <Banknote className="w-6 h-6 text-blue-500" />,
  },
  {
    title: '24/7 Support',
    desc: 'Our dedicated support team is always ready to assist you anytime, anywhere.',
    icon: <Clock className="w-6 h-6 text-purple-500" />,
  },
  {
    title: 'Community Trusted',
    desc: 'Over 2,500+ happy families trust us for their home care needs.',
    icon: <Users className="w-6 h-6 text-pink-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image Gallery Style */}
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-[100px] opacity-60"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600"
                    alt="Caregiving"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary p-8 rounded-[2rem] text-white">
                  <h4 className="font-fredoka text-4xl font-bold">99%</h4>
                  <p className="text-sm opacity-80">
                    Customer Satisfaction Rate
                  </p>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="bg-pink-500 p-8 rounded-[2rem] text-white">
                  <Check className="w-8 h-8 mb-2 bg-white/20 rounded-full p-1" />
                  <p className="font-bold">Fully Licensed & Insured</p>
                </div>
                <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600"
                    alt="Elderly Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Our Values
              </span>
              <h2 className="font-fredoka text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Why <span className="text-primary">Hevana</span> Is The Best{' '}
                <br />
                Choice For Your Family
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                We don't just provide caregivers; we provide peace of mind. Our
                mission is to make home care safe, accessible, and deeply
                compassionate for every household.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gray-900 hover:bg-black text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg active:scale-95">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
