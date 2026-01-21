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

const SEOPage = () => (
  <div className="pt-32 text-center text-white">
    Trang SEO (Đang phát triển)
  </div>
);
const PricePage = () => (
  <div className="pt-32 text-center text-white">
    Trang Báo Giá (Đang phát triển)
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-[#0F0A08] min-h-screen font-sans">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Suspense
                  fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}
                >
                  <Services />
                  <WhyChooseUs />
                  <ServiceArea />
                  <Gallery />
                  <PricingCTA />
                  <ContactMap />
                </Suspense>
              </>
            }
          />
          <Route path="/heo-quay-tphcm" element={<SEOPage />} />
          <Route path="/gia-heo-quay" element={<PricePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
