import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  AlertCircle,
  Truck,
  Calendar,
  ShoppingCart,
} from "lucide-react";
import { SeoBreadcrumb } from "../components/layout/seo/SeoBreadcrumb";

const PricePage = () => {
  const priceCategories = [
    {
      title: "Heo Sữa Quay",
      range: "Từ 2kg - 6kg",
      desc: "Phù hợp cúng Thần Tài, khai trương nhỏ, tiệc gia đình.",
      items: ["2kg - 2.5kg", "3kg - 4kg", "5kg - 6kg"],
      price: "Từ 900.000đ",
      isHot: true,
    },
    {
      title: "Heo Quay Nguyên Con",
      range: "Từ 8kg - 25kg",
      desc: "Dành cho đại lễ, cưới hỏi, cúng tất niên, tân gia.",
      items: ["8kg - 12kg", "13kg - 18kg", "Trên 20kg (Heo đại)"],
      price: "Gọi báo giá",
      isHot: false,
    },
  ];

  return (
    <main className="bg-[#0F0A08] pt-24 md:pt-32 pb-20 font-sans selection:bg-[#D4AF37]/30">
      <div className="container mx-auto px-6">
        {/* BREADCRUMBS */}
        <SeoBreadcrumb items={[{ name: "Bảng giá heo quay", active: true }]} />

        {/* HERO TITLE */}
        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-tight mb-6"
          >
            Giá heo quay nguyên con <br />
            <span className="text-gold-gradient">tại TPHCM mới nhất</span>
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Bảng giá được cập nhật dựa trên giá heo tươi VietGAP mỗi ngày. Cam
            kết không dùng heo đông lạnh.
          </p>
        </section>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {priceCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-12 rounded-[3rem] border ${cat.isHot ? "border-[#D4AF37]/50 bg-[#D4AF37]/5 shadow-[0_0_50px_rgba(212,175,55,0.1)]" : "border-white/10 bg-white/5"} shine-effect overflow-hidden transition-all`}
            >
              {cat.isHot && (
                <span className="absolute top-8 right-8 bg-[#991b1b] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="text-[#D4AF37] font-black text-2xl uppercase mb-2">
                {cat.title}
              </h3>
              <p className="text-white/40 text-sm mb-8">{cat.desc}</p>

              <div className="space-y-4 mb-10">
                <p className="text-xs uppercase text-gray-500 tracking-widest font-bold">
                  Kích thước phổ biến:
                </p>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-white border-b border-white/5 pb-3"
                  >
                    <span className="text-sm">{item}</span>
                    <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-display font-black text-white">
                  {cat.price}
                </span>
                <span className="text-gray-500 text-xs">/ con</span>
              </div>

              <a
                href="tel:0908426828"
                className="w-full py-5 bg-gold-gradient text-[#1a0f0a] rounded-2xl font-black flex justify-center items-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-gold/20"
              >
                <Phone size={20} /> GỌI BÁO GIÁ NGAY
              </a>
            </motion.div>
          ))}
        </div>

        {/* FACTORS INFLUENCING PRICE */}
        <section className="bg-white/5 rounded-[3rem] p-10 md:p-16 border border-white/10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#991b1b]" />
            <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase italic">
              Yếu tố ảnh hưởng đến giá
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <ShoppingCart size={24} />
              </div>
              <h4 className="text-white font-bold uppercase text-sm">
                Loại heo & Trọng lượng
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Heo sữa (dưới 6kg) tính theo con. Heo lớn (trên 8kg) giá phụ
                thuộc vào trọng lượng thực tế sau khi đã mổ sạch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Truck size={24} />
              </div>
              <h4 className="text-white font-bold uppercase text-sm">
                Thời gian giao nhận
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-white">Giao thường:</strong> Đặt trước
                3-5 tiếng. <br />
                <strong className="text-[#991b1b]">Giao hỏa tốc:</strong> Phí có
                thể thay đổi nhẹ tùy theo khoảng cách và giờ cao điểm.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                <Calendar size={24} />
              </div>
              <h4 className="text-white font-bold uppercase text-sm">
                Thời điểm thị trường
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vào các ngày lễ lớn (Vía Thần Tài, Rằm tháng Giêng, Tết), giá
                heo nguyên liệu có thể biến động nhẹ. Quý khách nên đặt trước
                1-2 ngày để giữ giá tốt nhất.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL NOTE */}
        <div className="mt-12 flex items-start gap-4 p-6 bg-[#991b1b]/10 rounded-2xl border border-[#991b1b]/20">
          <AlertCircle className="text-[#991b1b] shrink-0" size={24} />
          <p className="text-gray-400 text-sm italic">
            ** Mọi đơn hàng đều được tặng kèm: Nước chấm gia truyền Mr.Pig, dưa
            leo, kiệu chua, và hỗ trợ trang trí nơ đỏ cúng hỷ miễn phí.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PricePage;
