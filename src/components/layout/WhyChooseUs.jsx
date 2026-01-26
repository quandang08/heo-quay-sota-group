import { motion } from "framer-motion";
import { CheckCircle2, Utensils, Truck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 size={32} />,
    title: "Thịt Tươi VietGAP",
    desc: "Heo mới lên lò mỗi ngày, cam kết không dùng hàng đông lạnh lâu ngày.",
    accent: "text-amber-600",
  },
  {
    icon: <Utensils size={32} />,
    title: "Vị Ngon Gia Truyền",
    desc: "Công thức tẩm ướp độc bản, da giòn tan nổ cốm, thịt ngọt đậm đà.",
    accent: "text-orange-600",
  },
  {
    icon: <Truck size={32} />,
    title: "Giao Nhanh Tận Cửa",
    desc: "Đội ngũ ship riêng, đảm bảo heo đến nơi vẫn còn nóng hổi bốc khói.",
    accent: "text-amber-700",
  },
  {
    icon: <Clock size={32} />,
    title: "Kịp Giờ Cúng Lễ",
    desc: "Chúng tôi hiểu tầm quan trọng của giờ lễ, cam kết giao đúng hẹn 100%.",
    accent: "text-orange-700",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#FDF8F1] px-6 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-200/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-200/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Sparkles className="text-amber-600" size={16} />
            <span className="font-sans font-black text-amber-700 text-xs uppercase tracking-[0.4em]">
              Giá Trị Cốt Lõi
            </span>
            <Sparkles className="text-amber-600" size={16} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#451A03] uppercase mb-8 tracking-tighter leading-[1.1]"
          >
            Lý do khách hàng <br />
            <span className="text-amber-600 italic">Tin chọn Mr.Pig?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-10 bg-white border border-amber-100 rounded-[3rem] shadow-[0_15px_45px_rgba(217,119,6,0.05)] hover:shadow-[0_25px_60px_rgba(217,119,6,0.12)] hover:border-amber-300 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div
                className={`w-20 h-20 rounded-[2rem] bg-amber-50 ${item.accent} flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-inner`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl text-[#451A03] mb-4 font-black uppercase tracking-tight group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed font-medium">
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
