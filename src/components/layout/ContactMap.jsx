import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Navigation,
  PhoneCall,
} from "lucide-react";

const contactData = [
  {
    icon: <Phone size={22} className="text-[#D4AF37]" />,
    title: "SỐ ĐIỆN THOẠI ĐẶT HÀNG",
    value: "0908.426.828",
    desc: "Liên hệ nhanh để giữ đúng khung giờ lễ",
  },
  {
    icon: <MessageCircle size={22} className="text-[#D4AF37]" />,
    title: "HỖ TRỢ QUA ZALO",
    value: "0908.426.828",
    desc: "Xem hình heo quay mới trong ngày",
  },
  {
    icon: <MapPin size={22} className="text-[#D4AF37]" />,
    title: "XƯỞNG QUAY CHÍNH",
    value: "123 Đường Số 7, Bình Tân",
    desc: "Quy trình sạch – quay trong ngày",
  },
];

const ContactMap = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#14110f] border-t border-[#D4AF37]/10"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-semibold mb-4">
            Sẵn sàng phục vụ
          </span>
          <h2 className="font-display text-4xl md:text-5xl uppercase text-[#f9e29f] font-bold mb-4">
            Liên Hệ & Bản Đồ
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div className="space-y-4">
            {contactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center justify-between p-6 rounded-2xl
                bg-[#1b1816] border border-[#D4AF37]/10
                hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-lg font-semibold text-[#f3f3f3]">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-400 italic mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <Navigation
                  size={18}
                  className="text-gray-500 hover:text-[#D4AF37] transition-colors"
                />
              </motion.div>
            ))}

            {/* Direction box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#1b1816] border border-[#D4AF37]/15 space-y-6"
            >
              <div className="flex gap-4">
                <Navigation size={22} className="text-[#D4AF37]" />
                <div>
                  <h4 className="uppercase text-[#f9e29f] font-semibold mb-2">
                    Chỉ đường nhanh
                  </h4>
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    Khu vực Bình Tân – thuận tiện di chuyển Tân Phú, Quận 6,
                    Quận 11 trong 15–20 phút.
                  </p>
                </div>
              </div>

              <button
                className="w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm
                bg-[#991b1b] hover:bg-[#b91c1c] text-white
                shadow-lg shadow-[#991b1b]/20 transition-all active:scale-95
                flex items-center justify-center gap-3"
              >
                <PhoneCall size={20} />
                Gọi Đặt Hàng Ngay
              </button>
            </motion.div>
          </div>

          {/* Right – Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] rounded-[40px] overflow-hidden border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/5"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.645747627707!2d106.6046!3d10.7618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTIzIMSQxrDhu51uZyBT4buRIDcsIELDrG5oIFTDom4!5e0!3m2!1svi!2s!4v1705750000000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Địa chỉ Heo Quay Hữu Danh"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
