import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

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
                
                <Suspense fallback={<div className="h-96 bg-[#0F0A08] animate-pulse" />}>
                  <Services />
                </Suspense>
              </>
            }
          />

          <Route path="/heo-quay-tphcm" element={<SEOPage />} />
          <Route path="/gia-heo-quay" element={<PricePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;