import React from "react";
import HeroSection from "./components/hero";
import SkillSection from "./components/skill";
import ServicesSection from "./components/services";
import PortfolioSection from "./components/portfolio";
import TestimonialSection from "./components/testimonials";
import ContactSection from "./components/contact";

export default function HomePage() {
  return (
    <section className="  ">
      <HeroSection />
      <SkillSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </section>
  );
}
