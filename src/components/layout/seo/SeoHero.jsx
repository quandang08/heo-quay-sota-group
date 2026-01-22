import { motion } from "framer-motion";

export const SeoHero = () => {
  return (
    <section className="mb-20">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase leading-[1.1] mb-8">
        Heo quay nguyên con <span className="text-gold-gradient">TPHCM</span>{" "}
        <br />
        <span className="text-2xl md:text-4xl block mt-4 text-white/80 font-bold tracking-tight italic">
          Nhận giao nhanh đúng giờ - Giòn rụm thơm ngon
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed text-lg italic border-l-4 border-[#991b1b] pl-8 py-2">
          Chào mừng quý khách đến với dịch vụ cung cấp lễ vật tâm linh hàng đầu
          tại Sài Gòn. Với hơn 15 năm kinh nghiệm,
          <strong> Heo quay Mr.Pig</strong> tự hào mang đến những
          tuyệt phẩm heo quay nguyên con không chỉ đẹp về hình thức mà còn đỉnh
          cao về hương vị, phục vụ cho các dịp khai trương, đám hỏi, và các ngày
          đại lễ quan trọng.
        </div>
        <div className="relative group overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800"
            alt="Heo quay nguyên con TPHCM chất lượng cao"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};
