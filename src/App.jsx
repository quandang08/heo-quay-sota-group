import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import WhyChooseUs from "./components/layout/WhyChooseUs";
import ServiceArea from "./components/layout/ServiceArea";
import PricingCTA from "./components/layout/PricingCTA";
import ContactMap from "./components/layout/ContactMap";
import Footer from "./components/layout/Footer";

const Services = lazy(() => import("./components/layout/Services"));

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
                </Suspense>

                <Suspense
                  fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}
                >
                  <WhyChooseUs />
                </Suspense>

                <Suspense
                  fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}
                >
                  <ServiceArea />
                </Suspense>

                <Suspense
                  fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}
                >
                  <PricingCTA />
                </Suspense>

                <Suspense
                  fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}
                >
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
