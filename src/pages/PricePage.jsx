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
    <main className="bg-[#FDFBF7] pt-24 md:pt-32 pb-20 font-sans selection:bg-[#E25822]/20 text-[#2C2420]">
      <div className="container mx-auto px-6">

        <SeoBreadcrumb items={[{ name: "Bảng giá heo quay", active: true }]} />

        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-[#2C2420] uppercase leading-tight mb-6"
          >
            Giá heo quay nguyên con <br />
            <span className="bg-gradient-to-r from-[#E25822] to-[#F5A623] bg-clip-text text-transparent">
              tại TPHCM mới nhất
            </span>
          </motion.h1>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto italic font-medium">
            Bảng giá được cập nhật dựa trên giá heo tươi VietGAP mỗi ngày. Cam
            kết không dùng heo đông lạnh.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {priceCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-12 rounded-[3rem] bg-white border ${
                cat.isHot 
                ? "border-[#E25822]/20 shadow-[0_20px_60px_-15px_rgba(226,88,34,0.12)]" 
                : "border-[#F0EAE0] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
              } transition-all`}
            >
              {cat.isHot && (
                <span className="absolute top-8 right-8 bg-[#E25822] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-[#E25822]/20">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="text-[#E25822] font-black text-2xl uppercase mb-2">
                {cat.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm mb-8">{cat.desc}</p>

              <div className="space-y-4 mb-10">
                <p className="text-xs uppercase text-[#888888] tracking-widest font-bold">
                  Kích thước phổ biến:
                </p>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[#2C2420] border-b border-[#F5F1EA] pb-3"
                  >
                    <span className="text-sm font-medium">{item}</span>
                    <CheckCircle2 size={16} className="text-[#F5A623]" />
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-display font-black text-[#2C2420]">
                  {cat.price}
                </span>
                <span className="text-[#888888] text-xs font-bold">/ con</span>
              </div>

              <a
                href="tel:0908426828"
                className="w-full py-5 bg-gradient-to-r from-[#E25822] to-[#F5A623] text-white rounded-2xl font-black flex justify-center items-center gap-3 hover:shadow-xl hover:shadow-[#E25822]/30 transition-all active:scale-95 shadow-lg shadow-[#E25822]/20"
              >
                <Phone size={20} /> GỌI BÁO GIÁ NGAY
              </a>
            </motion.div>
          ))}
        </div>

        <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-[#F0EAE0] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#E25822] to-[#F5A623] rounded-full" />
            <h2 className="text-2xl md:text-3xl font-display font-black text-[#2C2420] uppercase italic">
              Yếu tố ảnh hưởng đến giá
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E6] flex items-center justify-center text-[#E25822]">
                <ShoppingCart size={24} />
              </div>
              <h4 className="text-[#2C2420] font-bold uppercase text-sm">
                Loại heo & Trọng lượng
              </h4>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Heo sữa (dưới 6kg) tính theo con. Heo lớn (trên 8kg) giá phụ
                thuộc vào trọng lượng thực tế sau khi đã mổ sạch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9E6] flex items-center justify-center text-[#F5A623]">
                <Truck size={24} />
              </div>
              <h4 className="text-[#2C2420] font-bold uppercase text-sm">
                Thời gian giao nhận
              </h4>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                <strong className="text-[#2C2420]">Giao thường:</strong> Đặt trước
                3-5 tiếng. <br />
                <strong className="text-[#E25822]">Giao hỏa tốc:</strong> Phí có
                thể thay đổi nhẹ tùy theo khoảng cách và giờ cao điểm.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E6] flex items-center justify-center text-[#E25822]">
                <Calendar size={24} />
              </div>
              <h4 className="text-[#2C2420] font-bold uppercase text-sm">
                Thời điểm thị trường
              </h4>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Vào các ngày lễ lớn (Vía Thần Tài, Rằm tháng Giêng, Tết), giá
                heo nguyên liệu có thể biến động nhẹ. Quý khách nên đặt trước
                1-2 ngày để giữ giá tốt nhất.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 flex items-start gap-4 p-6 bg-[#FFF4E6] rounded-2xl border border-[#F5E6D0]">
          <AlertCircle className="text-[#E25822] shrink-0" size={24} />
          <p className="text-[#5A4A40] text-sm font-medium italic">
            ** Mọi đơn hàng đều được tặng kèm: Nước chấm gia truyền Mr.Pig, dưa
            leo, kiệu chua, và hỗ trợ trang trí nơ đỏ cúng hỷ miễn phí.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PricePage;