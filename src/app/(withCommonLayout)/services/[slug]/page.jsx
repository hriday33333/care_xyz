import Image from "next/image";
import { Clock, BadgeCheck } from "lucide-react";
import services from "@/data/servicesDeteles.json";

const ServicesDetailsPage = ({ params }) => {
  const { slug } = params;

  // 🔍 id দিয়ে service খোঁজা
  const service = services.find(
    (item) => item._id === slug
  );

  if (!service) {
    return (
      <div className="text-center mt-20 text-red-500">
        Service Not Found
      </div>
    );
  }

  const { name, price, duration, description, img } = service;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <Image
          src={img}
          alt={name}
          width={500}
          height={300}
          className="rounded-xl object-cover"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{name}</h1>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-2 text-sm">
              <Clock size={16} /> {duration} Minutes
            </span>
            <span className="flex items-center gap-2 text-sm">
              <BadgeCheck size={16} /> Verified
            </span>
          </div>

          <p className="text-2xl font-semibold text-[#FF1532] mb-6">
            ৳ {price}
          </p>

          <button className="bg-gradient-to-r from-[#801617] to-[#FF1532]
          hover:from-[#FF1532] hover:to-[#801617]
          text-white px-6 py-3 rounded-lg transition-all">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsPage;
