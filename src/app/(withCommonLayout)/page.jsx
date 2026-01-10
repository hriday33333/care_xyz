import Container from '@/Components/shared/Container';
import Hero from '@/Components/shared/Hero';
import HowItWorks from '@/Components/shared/HowItWorks';
import ServicesSection from '@/Components/shared/ServicesSection';

export default function Home() {
  return (
    <Container>
      <Hero></Hero>
      <ServicesSection></ServicesSection>
      <HowItWorks></HowItWorks>
    </Container>
  );
}
