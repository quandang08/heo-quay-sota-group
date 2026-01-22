import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const PricingCTA = () => {
  return (
    <section className="py-24 bg-[#0F0A08] px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-20 border border-[#D4AF37]/30 rounded-[40px] text-center overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 bg-[#991b1b] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 shadow-lg shadow-[#991b1b]/20">
            <span className="animate-pulse">🔥</span> Ưu Đãi Đặt Trước
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase mb-6 tracking-tight">
            Giá Cả <span className="text-gold-gradient">Cạnh Tranh</span>
          </h2>

          <p className="font-sans text-[#f9e29f] text-xs md:text-sm uppercase tracking-[0.3em] mb-12 max-w-2xl mx-auto leading-loose">
            Liên hệ ngay để được tư vấn kích thước và báo giá tốt nhất hôm nay
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#991b1b] hover:bg-[#b91c1c] text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-[#991b1b]/30"
          >
            <PhoneCall size={20} />
            Nhận Báo Giá & Đặt Hàng
          </motion.button>

          <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/5 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-[80px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTA;
