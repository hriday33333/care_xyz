import Container from '@/Components/shared/Container';
import { Clock, Heart, Users } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Container>
      <div className="bg-white min-h-screen">
        {/* 1. Page Header / Breadcrumb */}
        <section className="bg-purple-50 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-500 text-sm">Home &gt; About Us</p>
        </section>

        {/* 2. Welcome & Hero Section (Image 1 & 2 combination) */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-12">
            {/* Fredoka Font Heading with Pink Color */}
            <h1 className="font-fredoka text-4xl md:text-6xl text-pink-500 font-bold mb-4">
              Welcome To baby care <br /> and kindergarten
            </h1>
            {/* Wavy Underline SVG */}
            <div className="flex justify-center">
              <svg
                width="120"
                height="15"
                viewBox="0 0 120 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13C12 13 10 2 20 2C30 2 28 13 38 13C48 13 46 2 56 2C66 2 64 13 74 13C84 13 82 2 92 2C102 2 100 13 110 13"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Compassionate Care for <br />
            <span className="text-purple-600">Peaceful Living</span>
          </h3>

          <p className="max-w-3xl mx-auto text-gray-600 mb-8 leading-relaxed">
            At Hevana, we are more than just a care provider — we are a
            dedicated team driven by empathy, professionalism, and the desire to
            make a meaningful impact on peoples lives.
          </p>

          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-all mb-16">
            Get Started
          </button>

          {/* Main Hero Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src="https://unsplash.com/s/photos/babies"
              alt="Caregiver with elderly"
              fill
              className="object-cover rounded-2xl" // স্টাইল যোগ করতে পারেন
            />
          </div>
        </section>

        {/* 3. Stats Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-100">
          {[
            { label: 'Families Served', value: '500+' },
            { label: 'Certified Caregivers', value: '120+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Client Satisfaction', value: '98%' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center border-r last:border-0 border-gray-200"
            >
              <h4 className="text-3xl font-bold text-gray-800">{stat.value}</h4>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* 4. "Why Hevana Is Trusted" Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Why <span className="text-purple-600">Hevana</span> Is Trusted
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We deliver trusted home care services focused on compassion,
              professionalism, safety, and personalized support for every
              family.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] relative">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
                alt="Caregiver helping senior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <FeatureCard
              icon={<Users className="text-purple-600" />}
              title="Certified Caregivers"
              desc="Our caregivers are licensed, trained and experienced professionals delivering safe, compassionate care."
            />
            <FeatureCard
              icon={<Heart className="text-purple-600" />}
              title="Personalized Care"
              desc="We design customized care plans tailored specifically to each client's lifestyle and medical needs."
            />
            <FeatureCard
              icon={<Clock className="text-purple-600" />}
              title="24/7 Support"
              desc="Our dedicated support team is available day and night, providing assistance and guidance whenever needed."
            />
          </div>
        </section>
      </div>
    </Container>
  );
};

// Sub-component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
  <Container>
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
      <div className="bg-purple-50 p-3 rounded-xl h-fit">{icon}</div>
      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </Container>
);

export default AboutPage;
