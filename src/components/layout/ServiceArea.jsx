import React from 'react';
import { motion } from 'framer-motion';

const areas = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", "Quận 11",
  "Quận 12", "Bình Tân", "Tân Phú", "Tân Bình", "Gò Vấp", "Phú Nhuận", "Bình Thạnh", "Bình Chánh",
  "Hóc Môn", "Củ Chi", "Nhà Bè"
];

const ServiceArea = () => {
  return (
    <section className="py-24 bg-[#0F0A08] px-6 border-t border-[#D4AF37]/5">
      <div className="container mx-auto text-center">
        {/* Tiêu đề phụ */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 block"
        >
          Phạm vi giao hàng
        </motion.span>

        {/* Tiêu đề chính */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-[#f9e29f] uppercase mb-6"
        >
          Khu Vực Phục Vụ
        </motion.h2>

        {/* Đường kẻ trang trí */}
        <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-16 opacity-50"></div>

        {/* Danh sách khu vực */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-6 py-3 bg-[#1A0F0A] border border-[#D4AF37]/10 rounded-xl 
                         text-white font-sans text-sm hover:border-[#D4AF37]/40 
                         hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-default"
            >
              {area}
            </motion.div>
          ))}
        </div>

        {/* Ghi chú chân trang */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-gray-500 text-sm italic"
        >
          * Giao hàng miễn phí cho đơn hàng heo quay nguyên con trong bán kính 10km quanh xưởng.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceArea;