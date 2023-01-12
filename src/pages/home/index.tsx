import React from "react";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import ServicesSection from "./components/services";
import PortfolioSection from "./components/portfolio";
import TestimonialSection from "./components/testimonials";
import ContactSection from "./components/contact";

export default function HomePage() {
  return (
    <section className="  ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </section>
  );
}
