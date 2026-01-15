import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import WhyThisModelWorks from "@/components/WhyThisModelWorks";
import ServicesCTA from "@/components/ServicesCTA";
import Values from "@/components/Values";
import Industries from "@/components/Industries";
import GlobalReach from "@/components/GlobalReach";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Services />
        <WhyThisModelWorks />
        <ServicesCTA />
        <Values />
        <Industries />
        <GlobalReach />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
