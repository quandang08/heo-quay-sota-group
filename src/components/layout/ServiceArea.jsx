import { motion } from "framer-motion";

const areas = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
  "Quận 10", "Quận 11", "Quận 12", "Bình Tân", "Tân Phú", "Tân Bình",
  "Gò Vấp", "Phú Nhuận", "Bình Thạnh", "Bình Chánh", "Hóc Môn",
  "Củ Chi", "Nhà Bè"
];

const ServiceArea = () => {
  return (
    <section
      className="
        py-24 px-6
        bg-gradient-to-b
        from-[#7A1418]
        via-[#5B0F14]
        to-[#3A0A0C]
        border-t border-[#D4AF37]/20
      "
    >
      <div className="container mx-auto text-center">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            block mb-4
            text-[#F5E6A8]
            text-xs uppercase
            tracking-[0.4em]
          "
        >
          Phạm vi giao hàng
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            font-display font-bold
            text-4xl md:text-5xl
            uppercase
            text-[#FFD966]
            mb-6
          "
        >
          Khu Vực Phục Vụ
        </motion.h2>

        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-16" />

        {/* Areas */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-14">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="
                px-6 py-3
                bg-[#FFF6E5]
                text-[#3A0A0C]
                font-sans text-sm
                rounded-xl
                border border-[#D4AF37]/40
                shadow-md
                hover:border-[#D4AF37]
                hover:shadow-[#D4AF37]/30
                transition-all duration-300
                cursor-default
              "
            >
              {area}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-[#F5E6A8]
            text-sm italic
            opacity-80
          "
        >
          * Giao hàng miễn phí cho đơn hàng heo quay nguyên con trong bán kính 10km quanh xưởng.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceArea;
