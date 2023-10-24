import AboutSection from "./components/AboutSection";
import BannerSection from "./components/BannerSection";
import ClientSection from "./components/ClientSection";
import ContactSectionSecond from "./components/ConatctSectionSecond";
import ContactSection from "./components/ContactSection";
import CopyrightSection from "./components/CopyrightSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/ServicesSection";

function App() {

  return (
    <div>
      <HeaderSection />
      <BannerSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <ClientSection />
      <ContactSection />
      <ContactSectionSecond />
      <FooterSection />
      <CopyrightSection />
    </div>

  );
}

export default App
