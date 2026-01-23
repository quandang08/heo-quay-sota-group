import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Gallery from "./components/layout/Gallery";

// Lazy loading để tối ưu performance
const Services = lazy(() => import("./components/layout/Services"));
const WhyChooseUs = lazy(() => import("./components/layout/WhyChooseUs"));
const ServiceArea = lazy(() => import("./components/layout/ServiceArea"));
const PricingCTA = lazy(() => import("./components/layout/PricingCTA"));
const ContactMap = lazy(() => import("./components/layout/ContactMap"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ServiceSEO = lazy(() => import("./pages/ServiceSEO"));
const PricePage = lazy(() => import("./pages/PricePage"));
const Contact = lazy(() => import("./pages/ContactPage"));

const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const AppContent = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div className="bg-[#0F0A08] min-h-screen font-sans">
      {!isAdminPath && <Header />}

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#0F0A08] flex items-center justify-center text-[#D4AF37]">
            Đang tải...
          </div>
        }
      >
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
          <Route path="/ve-chung-toi" element={<AboutUs />} />
          <Route path="/heo-quay-nguyen-con-tphcm" element={<ServiceSEO />} />
          <Route path="/bang-gia-heo-quay" element={<PricePage />} />
          <Route path="/lien-he" element={<Contact />} />

          {/* Group các route Admin */}
          <Route path="/admin">
            <Route index element={<Navigate to="/admin/login" replace />} />

            <Route path="login" element={<AdminLogin />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Suspense>

      {!isAdminPath && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
