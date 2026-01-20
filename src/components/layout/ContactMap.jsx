import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Navigation, PhoneCall } from 'lucide-react';

const contactData = [
  {
    icon: <Phone className="text-[#f9e29f]" size={24} />,
    title: "SỐ ĐIỆN THOẠI ĐẶT HÀNG",
    value: "0908.426.828",
    desc: "Liên hệ ngay để được giữ chỗ giờ tốt"
  },
  {
    icon: <MessageCircle className="text-[#22c55e]" size={24} />,
    title: "HỖ TRỢ QUA ZALO",
    value: "0908.426.828",
    desc: "Nhận ngay hình ảnh mẫu heo mới quay hôm nay"
  },
  {
    icon: <MapPin className="text-[#ef4444]" size={24} />,
    title: "XƯỞNG QUAY CHÍNH",
    value: "123 Đường Số 7, Bình Tân",
    desc: "Quy trình quay heo sạch, khép kín 100%"
  }
];

const ContactMap = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F0A08] px-6 border-t border-[#D4AF37]/5">
      <div className="container mx-auto">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <span className="font-sans text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 block">
            Sẵn sàng phục vụ 24/7
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#f9e29f] uppercase mb-6">
            Liên Hệ & Bản Đồ
          </h2>
          <div className="w-24 h-[1px] bg-gold-gradient mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Cột trái: Thông tin liên hệ */}
          <div className="space-y-4">
            {contactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A0F0A]/60 border border-[#D4AF37]/10 p-6 rounded-2xl flex items-center justify-between group hover:border-[#D4AF37]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans text-gray-500 text-[10px] uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="font-display text-xl text-white tracking-wide">{item.value}</p>
                    <p className="font-sans text-gray-400 text-xs italic mt-1">{item.desc}</p>
                  </div>
                </div>
                <div className="text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                  <Navigation size={18} />
                </div>
              </motion.div>
            ))}

            {/* Thẻ Chỉ Đường & Nút Call */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A0F0A]/60 border border-[#D4AF37]/10 p-8 rounded-3xl space-y-6"
            >
              <div className="flex gap-4">
                <Navigation className="text-[#D4AF37] shrink-0" size={24} />
                <div>
                  <h4 className="font-display text-[#f9e29f] text-lg uppercase mb-2">Chỉ đường</h4>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed italic">
                    Xưởng tọa lạc tại khu vực trung tâm Bình Tân, thuận tiện di chuyển sang các quận lân cận như Tân Phú, Quận 6, Quận 11 chỉ trong 15-20 phút.
                  </p>
                </div>
              </div>
              <button className="w-full bg-[#991b1b] hover:bg-[#b91c1c] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl shadow-[#991b1b]/20 transition-all active:scale-95">
                <PhoneCall size={20} />
                Gọi Đặt Hàng Ngay
              </button>
            </motion.div>
          </div>

          {/* Cột phải: Bản đồ */}
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