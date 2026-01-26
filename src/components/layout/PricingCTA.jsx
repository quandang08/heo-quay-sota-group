import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const PricingCTA = () => {
  return (
    <section className="py-24 bg-[#1A120E] px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-20 
            bg-[#201612]/80 
            border border-[#E6C87A]/30 
            rounded-[40px] 
            text-center 
            overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 
            bg-[#7A1F1F] 
            text-[#FFF7ED] 
            text-[10px] md:text-xs 
            font-bold uppercase tracking-[0.2em] 
            px-4 py-2 rounded-full mb-8 
            shadow-lg shadow-[#7A1F1F]/30">
            <span className="animate-pulse">🔥</span> Ưu Đãi Đặt Trước
          </div>

          {/* Title */}
          <h2 className="font-display font-bold 
            text-4xl md:text-6xl lg:text-7xl 
            text-[#FFF4CC] 
            uppercase mb-6 tracking-tight">
            Giá Cả <span className="text-gold-gradient">Cạnh Tranh</span>
          </h2>

          {/* Description */}
          <p className="font-sans 
            text-[#EAD9B0] 
            text-xs md:text-sm 
            uppercase tracking-[0.3em] 
            mb-12 max-w-2xl mx-auto 
            leading-loose">
            Liên hệ ngay để được tư vấn kích thước và báo giá tốt nhất hôm nay
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 
              bg-[#7A1F1F] hover:bg-[#922525] 
              text-[#FFF7ED] 
              px-8 py-5 rounded-2xl 
              font-bold uppercase tracking-widest text-sm 
              transition-all 
              shadow-xl shadow-[#7A1F1F]/40"
          >
            <PhoneCall size={20} />
            Nhận Báo Giá & Đặt Hàng
          </motion.button>

          {/* Ambient light */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#E6C87A]/10 blur-[90px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#E6C87A]/10 blur-[90px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTA;
