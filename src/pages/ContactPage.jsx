import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, MessageSquare, ChevronRight } from "lucide-react";
import { SeoBreadcrumb } from "../components/layout/seo/SeoBreadcrumb";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Gọi Đặt Hàng Ngay",
      detail: "0908.426.828",
      link: "tel:0908426828",
      iconBg: "bg-[#E11D48]",
      textColor: "text-[#E11D48]"
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Chat Zalo Tư Vấn",
      detail: "0908.426.828",
      link: "https://zalo.me/0908426828",
      iconBg: "bg-[#0088FF]",
      textColor: "text-[#0088FF]"
    },
    {
      icon: <Clock size={28} />,
      title: "Giờ Mở Cửa",
      detail: "06:00 - 21:00 (Mỗi ngày)",
      link: "#",
      iconBg: "bg-[#FACC15]",
      textColor: "text-gray-900"
    },
  ];

  return (
    <main className="bg-[#F8F9FA] pt-24 md:pt-32 pb-20 font-sans text-gray-900">
      <div className="container mx-auto px-6">
        <SeoBreadcrumb items={[{ name: "Liên hệ", active: true }]} />

        <section className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase mb-4 tracking-tight"
          >
            Liên Hệ <span className="text-[#E11D48]">Mr.Pig</span>
          </motion.h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            Heo quay nóng hổi, da giòn tan. <br />
            <strong className="text-gray-900">Gọi là có ngay sau 2 giờ tại TPHCM!</strong>
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 p-6 bg-white border-2 border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
              >
                 {/* Hiệu ứng hover nhẹ */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 ${info.iconBg} transition-opacity`} />
                
                <div className={`w-16 h-16 rounded-full ${info.iconBg} flex items-center justify-center text-white shrink-0 shadow-md`}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{info.title}</h4>
                  <p className={`text-2xl font-black ${info.textColor}`}>{info.detail}</p>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-gray-500 transition-colors" />
              </motion.a>
            ))}

            <div className="p-8 bg-[#FFFBEB] border-2 border-[#FCD34D] rounded-3xl relative">
               <div className="absolute top-0 left-0 w-full h-2 bg-[#FACC15]" />
              <div className="flex items-center gap-3 text-[#B45309] mb-4">
                <MapPin size={28} className="fill-[#FACC15]" />
                <h4 className="font-bold uppercase text-lg">Hệ thống lò quay</h4>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium text-base">
                Có mặt tại: <span className="font-bold text-gray-900">Tân Bình, Gò Vấp, Quận 12</span>. <br />
                Chúng tôi giao hàng hỏa tốc khắp TPHCM để đảm bảo độ nóng giòn.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border-2 border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-[#E11D48]" />
            
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 mt-4">Gửi yêu cầu báo giá</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="font-bold text-sm text-gray-700 ml-1">Tên của bạn <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Ví dụ: Anh Ba" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 font-medium focus:outline-none focus:border-[#E11D48] focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                   <label className="font-bold text-sm text-gray-700 ml-1">Số điện thoại <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="09xx..." className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 font-medium focus:outline-none focus:border-[#E11D48] focus:bg-white transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                 <label className="font-bold text-sm text-gray-700 ml-1">Chọn loại heo</label>
                <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 font-bold text-gray-900 focus:outline-none focus:border-[#E11D48] focus:bg-white transition-all appearance-none cursor-pointer">
                  <option>Heo Sữa Quay (2kg - 6kg)</option>
                  <option>Heo Quay Nguyên Con (8kg - 25kg)</option>
                  <option>Khác (Heo miếng, gà, vịt...)</option>
                </select>
              </div>

              <div className="space-y-2">
                 <label className="font-bold text-sm text-gray-700 ml-1">Ghi chú thêm</label>
                <textarea rows="3" placeholder="Ví dụ: Giao lúc 10h sáng mai tại Quận 1..." className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 font-medium focus:outline-none focus:border-[#E11D48] focus:bg-white transition-all"></textarea>
              </div>

              <button className="w-full py-5 bg-[#E11D48] hover:bg-red-700 text-white rounded-xl font-black uppercase text-lg tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-[0.98] flex justify-center items-center gap-3">
                <Send size={24} strokeWidth={3} /> GỬI ĐẶT HÀNG NGAY
              </button>
              <p className="text-center text-gray-500 text-sm font-medium">Chúng tôi sẽ gọi lại xác nhận trong vòng 5 phút.</p>
            </form>
          </div>
        </div>

        <section className="rounded-3xl overflow-hidden border-2 border-white h-[450px] shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.10134447604!2d106.59129525147551!3d10.815858085442654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb33527%3A0x67396a84918e5e8e!2sH%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1705645564282!5m2!1svi!2s" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
          />
        </section>
      </div>
    </main>
  );
};

export default ContactPage;