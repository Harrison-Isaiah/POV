// import About from "@/components/ui/About/About";
import About from "@/components/ui/About";
import CTA from "@/components/ui/CTA";
import ExpertiseSlider from "@/components/ui/ExpertiseSlider/ExpertiseSlider";
// import ExpertiseSlider from "@/components/ui/ExpertiseSlider/ExpertiseSlider";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import ProcessSlider from "@/components/ui/ProcessSlider";
import Testimonial from "@/components/ui/Testimonial";
import ToolsWeUse from "@/components/ui/ToolsWeUse/ToolsWeUse";
import VisualFeatures from "@/components/ui/VisualFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseSlider/>
      <About/>
      <ProcessSlider/>
      <ToolsWeUse />



      
      {/* <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQs /> */}
      {/* <Footer /> */}
    </>
  );
}
