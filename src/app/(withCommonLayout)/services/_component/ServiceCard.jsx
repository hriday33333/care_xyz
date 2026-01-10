import { Clock, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ service }) {
  const {
    _id,
    name,
    description,
    price,
    img,
    duration,
    isFeatured,
    isDeleted,
  } = service || {};

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl h-full ${
        isDeleted ? 'opacity-50 grayscale' : ''
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && !isDeleted && (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          <Star size={14} className="text-yellow-400" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex h-full flex-col space-y-4 p-6">
        {/* Title + Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

          <div
            className="mt-2 line-clamp-3 text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Meta Info */}
        <div className="">
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              {duration} mins
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Starting at</p>
              <p className="text-2xl font-bold text-gray-900">৳{price}</p>
            </div>
          </div>

          {/* CTA */}
          {!isDeleted ? (
            <Link href={`/services/${service?._id}`}>
              <button
                className="w-full bg-gradient-to-r from-[#801617] to-[#FF1532]
hover:from-[#FF1532] hover:to-[#801617]
text-white btn rounded-lg transition-all duration-300"
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
        </div>
      </div>
    </div>
  );
}
