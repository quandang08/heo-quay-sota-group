import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Gallery from "./components/layout/Gallery";

// Chuyển tất cả sang lazy để giảm Initial Bundle Size
const Services = lazy(() => import("./components/layout/Services"));
const WhyChooseUs = lazy(() => import("./components/layout/WhyChooseUs"));
const ServiceArea = lazy(() => import("./components/layout/ServiceArea"));
const PricingCTA = lazy(() => import("./components/layout/PricingCTA"));
const ContactMap = lazy(() => import("./components/layout/ContactMap"));
const ServiceSEO = lazy(() => import("./pages/ServiceSEO"));
const PricePage = lazy(() => import("./pages/PricePage"));

function App() {
  return (
    <Router>
      <div className="bg-[#0F0A08] min-h-screen font-sans">
        <Header />

        <Suspense fallback={<div className="min-h-screen bg-[#0F0A08] flex items-center justify-center text-[#D4AF37]">Đang tải...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <WhyChooseUs />
                  <ServiceArea />
                  <Gallery />
                  <PricingCTA />
                  <ContactMap />
                </>
              }
            />
            <Route path="/heo-quay-nguyen-con-tphcm" element={<ServiceSEO />} />
            <Route path="/bang-gia-heo-quay" element={<PricePage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
