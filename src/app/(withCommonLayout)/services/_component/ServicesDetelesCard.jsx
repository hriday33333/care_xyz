import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const ServicesDetelesCard = ({ service }) => {
  const { _id, isDeleted } = service;

  return (
    <>
      {!isDeleted ? (
        <Link href={`/services/${_id}`}>
          <button
            className="w-full bg-gradient-to-r from-[#801617] to-[#FF1532]
            hover:from-[#FF1532] hover:to-[#801617]
            text-white py-3 rounded-lg transition-all duration-300"
          >
            Book Service
          </button>
        </Link>
      ) : (
        <div className="flex items-center justify-center gap-2 rounded-xl bg-gray-200 py-3 text-sm font-medium text-gray-600">
          <ShieldCheck size={16} />
          Service Unavailable
        </div>
      )}
    </>
  );
};

export default ServicesDetelesCard;
