import serviceData from '@/data/services.json';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Services
        </h1>

        {/* Grid for cards - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title */}
                <h2 className="card-title text-2xl">{service.title}</h2>

                {/* Description */}
                <p className="text-base-content/80 mt-3">
                  {service.description}
                </p>

                {/* Optional: Action button */}
                <div className="card-actions mt-6">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
