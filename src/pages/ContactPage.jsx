import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { SeoBreadcrumb } from "../components/layout/seo/SeoBreadcrumb";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Hotline Đặt Hàng",
      detail: "0908.426.828",
      link: "tel:0908426828",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Zalo Tư Vấn",
      detail: "Zalo: 0908.426.828",
      link: "https://zalo.me/0908426828",
    },
    {
      icon: <Clock size={24} />,
      title: "Giờ Hoạt Động",
      detail: "06:00 - 21:00 (Tất cả các ngày)",
      link: "#",
    },
  ];

  return (
    <main className="bg-[#0F0A08] pt-24 md:pt-32 pb-20 font-sans selection:bg-[#D4AF37]/30">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* BREADCRUMBS */}
        <SeoBreadcrumb items={[{ name: "Liên hệ Mr.Pig", active: true }]} />

        {/* HEADER SECTION */}
        <section className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white uppercase mb-6"
          >
            Liên Hệ <span className="text-gold-gradient">Đặt Heo Quay</span>
          </motion.h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed italic">
            Quý khách có thể gọi trực tiếp hoặc để lại lời nhắn để được tư vấn kích thước heo và hỗ trợ trang trí mâm cúng phù hợp nhất.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ */}
          <div className="lg:col-span-5 space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-[#1a0f0a]">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">{info.title}</h4>
                  <p className="text-white text-xl font-bold">{info.detail}</p>
                </div>
              </motion.a>
            ))}

            <div className="p-8 bg-[#991b1b]/10 border border-[#991b1b]/20 rounded-[2.5rem] space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <MapPin size={24} />
                <h4 className="font-bold uppercase text-sm">Hệ thống lò quay tại TPHCM</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Chúng tôi có hệ thống lò quay tại các quận: <br />
                <span className="text-white">Tân Bình, Gò Vấp, Quận 12.</span> <br />
                Giao hàng nóng hổi trong vòng 2h tại tất cả các khu vực nội thành TPHCM.
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: FORM LIÊN HỆ */}
          <div className="lg:col-span-7 bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl font-display font-black text-white uppercase mb-8">Gửi yêu cầu báo giá</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest pl-2">Họ và tên</label>
                <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest pl-2">Số điện thoại</label>
                <input type="tel" placeholder="09xx xxx xxx" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest pl-2">Loại sản phẩm cần đặt</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all appearance-none">
                  <option className="bg-[#0F0A08]">Heo Sữa Quay (2kg - 6kg)</option>
                  <option className="bg-[#0F0A08]">Heo Quay Nguyên Con (8kg - 25kg)</option>
                  <option className="bg-[#0F0A08]">Heo Quay Miếng</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest pl-2">Ghi chú yêu cầu</label>
                <textarea rows="4" placeholder="Ví dụ: Giao hỏa tốc quận 1, trang trí chữ Hỷ..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all"></textarea>
              </div>
              <button className="md:col-span-2 w-full py-5 bg-gold-gradient text-[#1a0f0a] rounded-2xl font-black flex justify-center items-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-gold/20">
                <Send size={20} /> GỬI YÊU CẦU NGAY
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <section className="rounded-[3rem] overflow-hidden border border-white/10 h-[450px] relative shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10134447604!2d106.59129525147551!3d10.815858085442654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb33527%3A0x67396a84918e5e8e!2sH%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1705645564282!5m2!1svi!2s" 
            className="w-full h-full grayscale invert border-0" 
            allowFullScreen="" 
            loading="lazy" 
          />
        </section>
      </div>
    </main>
  );
};

export default ContactPage;