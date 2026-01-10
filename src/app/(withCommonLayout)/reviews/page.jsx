import Container from '@/Components/shared/Container';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const reviewsData = [
  // আপনার দেওয়া JSON ডেটা এখানে...
  {
    id: '5f47ac10b4f1c03e8c123456',
    userName: 'John Doe',
    ratings: 4.8,
    review:
      'The babysitter was very caring and professional. My child felt safe and happy.',
    parcel_id: 'baby-care-001',
    user_photoURL: 'https://randomuser.me/api/portraits/men/10.jpg',
    date: '2024-05-08T14:30:00.000Z',
  },
  {
    id: '5f47ac10b4f1c03e8c234567',
    userName: 'Jane Smith',
    ratings: 4.2,
    review:
      'Elderly care service was reliable and respectful. My parents were very satisfied.',
    parcel_id: 'elderly-care-002',
    user_photoURL: 'https://randomuser.me/api/portraits/women/25.jpg',
    date: '2024-06-10T10:15:00.000Z',
  },
  {
    id: '5f47ac10b4f1c03e8c345678',
    userName: 'Alex Brown',
    ratings: 5.0,
    review:
      'Excellent service! The caregiver was punctual, kind, and very professional.',
    parcel_id: 'sick-care-003',
    user_photoURL: 'https://randomuser.me/api/portraits/men/34.jpg',
    date: '2024-07-01T08:50:00.000Z',
  },
  {
    id: '5f47ac10b4f1c03e8c456789',
    userName: 'Lisa White',
    ratings: 4.5,
    review:
      'Very responsive and trustworthy home care service. Highly recommended.',
    parcel_id: 'elderly-care-004',
    user_photoURL: 'https://randomuser.me/api/portraits/women/12.jpg',
    date: '2024-07-15T09:10:00.000Z',
  },
  {
    id: '5f47ac10b4f1c03e8c567890',
    userName: 'David Lee',
    ratings: 3.9,
    review: 'Care service was good, but caregiver arrived slightly late.',
    parcel_id: 'baby-care-005',
    user_photoURL: 'https://randomuser.me/api/portraits/men/19.jpg',
    date: '2024-08-02T16:45:00.000Z',
  },
  {
    id: '5f47ac10b4f1c03e8c678901',
    userName: 'Nina Khan',
    ratings: 4.9,
    review:
      'Outstanding experience! The caregiver treated my mother like family.',
    parcel_id: 'elderly-care-006',
    user_photoURL: 'https://randomuser.me/api/portraits/women/8.jpg',
    date: '2024-08-10T12:00:00.000Z',
  },
];

const ReviewPage = () => {
  return (
    <Container>
      <div className="bg-purple-50/30 min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-pink-500 text-lg font-bold uppercase tracking-wider mb-2">
              Testimonials
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Real stories from families who trust Hevana for their loved ones'
              care.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col hover:shadow-xl transition-shadow duration-300 relative group"
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-6 right-8 w-12 h-12 text-purple-50 opacity-10 group-hover:opacity-20 transition-opacity" />

                {/* User Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={item.user_photoURL}
                      alt={item.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {item.userName}
                    </h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-600">
                        {item.ratings}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 italic leading-relaxed mb-6 flex-grow">
                  "{item.review}"
                </p>

                {/* Footer Info */}
                <div className="border-t border-gray-50 pt-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                  <span className="text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {item.parcel_id.split('-').slice(0, 2).join(' ')}
                  </span>
                  <span className="text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Summary Footer */}
          <div className="mt-20 bg-white rounded-[3rem] p-10 shadow-sm border border-purple-50 flex flex-wrap justify-around items-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">4.6/5</p>
              <p className="text-gray-500 font-medium">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-pink-500">100%</p>
              <p className="text-gray-500 font-medium">Trust Factor</p>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">2.5k+</p>
              <p className="text-gray-500 font-medium">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReviewPage;
