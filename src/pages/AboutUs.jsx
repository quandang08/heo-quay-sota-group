import { motion } from "framer-motion";
import { Award, Users, History, Heart } from "lucide-react";
import { SeoBreadcrumb } from "../components/layout/seo/SeoBreadcrumb";

const AboutUs = () => {
  return (
    <main className="bg-[#0F0A08] pt-24 md:pt-32 pb-20 font-sans selection:bg-[#D4AF37]/30">
      <div className="container mx-auto px-6">
        <SeoBreadcrumb
          items={[{ name: "Giới thiệu MR.PIG", active: true }]}
        />
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black">
              Hành Trình 15 Năm
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase leading-none">
              Gìn Giữ <br />{" "}
              <span className="text-gold-gradient">Tinh Hoa</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed italic border-l-4 border-[#991b1b] pl-8">
              Khởi nguồn từ niềm đam mê với ẩm thực truyền thống, **Heo Quay
              Mr.Pig** đã trải qua hơn một thập kỷ để hoàn thiện công thức heo
              quay "Da giòn - Thịt mềm" danh bất hư truyền tại Sài Gòn.
            </p>
          </motion.div>
          <div className="relative rounded-[3rem] overflow-hidden border border-[#D4AF37]/20 shadow-2xl aspect-video lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800"
              className="w-full h-full object-cover"
              alt="Heo Quay Mr.Pig"
            />
          </div>
        </section>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-y border-white/5 py-16">
          {[
            { icon: <History />, label: "Năm Kinh Nghiệm", value: "15+" },
            { icon: <Users />, label: "Khách Hàng", value: "10,000+" },
            { icon: <Award />, label: "Giải Thưởng", value: "05" },
            { icon: <Heart />, label: "Sự Tận Tâm", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="text-[#D4AF37] flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-display font-black text-white">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase">
              Triết Lý Của Chúng Tôi
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tại **Mr.Pig**, chúng tôi không chỉ bán heo quay, chúng tôi cung
              cấp **"Sự An Tâm"**. Mỗi lễ vật dâng lên bàn thờ gia tiên hay bàn
              tiệc khai trương đều được chúng tôi chuẩn bị bằng cả sự thành kính
              và kỹ thuật thủ công bậc thầy.
            </p>
            <div className="flex justify-center gap-6">
              <div className="w-12 h-1 bg-[#D4AF37]"></div>
              <div className="w-12 h-1 bg-[#991b1b]"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
