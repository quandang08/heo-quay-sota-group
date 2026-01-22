import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Utensils, Truck, Clock } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 size={32} />,
    title: "Heo Sạch Mỗi Ngày",
    desc: "Cam kết chỉ sử dụng heo tươi nóng trong ngày, đạt chuẩn vệ sinh ATTP.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Gia Vị Độc Quyền",
    desc: "Thấm đượm hương vị gia truyền, thơm ngon từ ngoài da vào tận xương.",
  },
  {
    icon: <Truck size={32} />,
    title: "Giao Nhanh HCM",
    desc: "Đội ngũ shipper chuyên nghiệp, đảm bảo heo đến nơi vẫn còn nóng hổi.",
  },
  {
    icon: <Clock size={32} />,
    title: "Đúng Giờ Tuyệt Đối",
    desc: "Chúng tôi hiểu giá trị của giờ lễ, cam kết không trễ hẹn dù chỉ 1 phút.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#0F0A08] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans font-medium text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Giá Trị Cốt Lõi
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-5xl text-[#f9e29f] uppercase mb-6"
          >
            Tại Sao Chọn <span className="text-white">MR.PIG ?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A0F0A]/40 border border-[#D4AF37]/10 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              {/* Icon với Gradient Gold */}
              <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center text-[#1A0F0A] mb-6 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Title dùng font-display */}
              <h3 className="font-display text-xl text-[#f9e29f] mb-4 font-bold uppercase tracking-wide">
                {item.title}
              </h3>

              {/* Description dùng font-sans */}
              <p className="font-sans text-gray-400 text-sm leading-relaxed italic">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
