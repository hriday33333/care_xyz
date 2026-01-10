import Container from '@/Components/shared/Container';
import serviceData from '@/data/services.json';
import ServiceCard from './_component/ServiceCard';

const ServicesPage = () => {
  return (
    <Container>
      <div className="min-h-screen bg-base-100 py-12 px-4">
        <div className="">
          {/* হেডিং */}
          <h1 className="text-4xl font-bold text-center mb-12 text-[#393D72]">
            Our Care Services
          </h1>
          <div className="grid md:grid-cols-3 gap-4">
            {serviceData?.data?.map((service) => {
              return (
                <ServiceCard service={service} key={service._id}></ServiceCard>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesPage;
