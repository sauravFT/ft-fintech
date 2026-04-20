'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import ClientsSection from '@/components/ClientsSection';
import FeaturesSection from '@/components/FeaturesSection';
import FeatureDetail from '@/components/FeatureDetail';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const ParticleBackground = dynamic(
  () => import('@/components/ParticleBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ClientsSection />
      <FeaturesSection />
      <FeatureDetail />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}