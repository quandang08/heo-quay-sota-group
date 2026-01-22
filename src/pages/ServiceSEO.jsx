import { i } from "framer-motion/client";
import { Phone, CheckCircle2, Truck, ShieldCheck, Flame } from "lucide-react";
import { SeoBreadcrumb } from "../components/layout/seo/SeoBreadcrumb";
import { SeoHero } from "../components/layout/seo/SeoHero";
import { VideoProductSection } from "../components/layout/seo/VideoProductSection";
import { ProcessSection } from "../components/layout/seo/ProcessSection";
import { SeoContent } from "../components/layout/seo/SeoContent";

const ServiceSEO = () => {
  const stepsData = [
    { step: "01", title: "Tuyển chọn", desc: "100% heo tươi sạch VietGAP." },
    { step: "02", title: "Tẩm ướp", desc: "Công thức thảo mộc gia truyền." },
    {
      step: "03",
      title: "Quay Lu",
      desc: "Kỹ thuật quay lu giúp da giòn tan.",
    },
    { step: "04", title: "Kiểm định", desc: "Kiểm tra kỹ trước khi đóng gói." },
  ];

  return (
    <main className="bg-[#0F0A08] pt-24 md:pt-32 pb-20 font-sans selection:bg-[#D4AF37]/30">
      <div className="container mx-auto px-6">
        <SeoBreadcrumb
          items={[{ name: "Heo Quay Nguyên Con TPHCM", active: true }]}
        />

        <SeoHero />

        <VideoProductSection />

        <ProcessSection steps={stepsData} />

        <SeoContent />
      </div>
    </main>
  );
};

export default ServiceSEO;
