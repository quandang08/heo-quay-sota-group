import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Send,
  Youtube,
} from "lucide-react";
import Logo from "../../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0A0503] pt-20 pb-10 px-6 border-t border-[#D4AF37]/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-16 h-16 rounded-full flex items-start justify-center overflow-hidden -mt-3">
                <img
                  src={Logo}
                  alt="Logo Heo Quay Hữu Danh"
                  width="40"
                  height="40"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">
                Heo Quay <span className="text-[#D4AF37]">MR.PIG</span>
              </h3>
            </div>
            <p className="font-sans text-gray-500 text-md leading-relaxed italic">
              Sứ mệnh của chúng tôi là mang đến những lễ vật trang trọng, ngon
              miệng và sạch sẽ nhất cho các nghi lễ truyền thống của gia đình
              bạn.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl text-[#D4AF37] uppercase tracking-[0.2em] mb-8">
              Liên kết nhanh
            </h4>
            <ul className="space-y-4 font-sans text-md text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Thư Viện Ảnh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Khu Vực Giao Hàng
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[#D4AF37] text-xl uppercase tracking-[0.2em] mb-8">
              Thông tin
            </h4>
            <ul className="space-y-6 font-sans text-md text-gray-400">
              <li className="flex gap-4">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <span>123 Đường Số 7, Bình Tân, TPHCM</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>0908.426.828</span>
              </li>
              <li className="flex gap-4">
                <Clock size={18} className="text-[#D4AF37] shrink-0" />
                <span>Phục vụ: 04:00 - 21:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[#D4AF37] text-xl uppercase tracking-[0.2em] mb-8">
              Tư vấn nhanh
            </h4>
            <p className="font-sans text-gray-500 text-md mb-6 italic">
              Để lại số điện thoại để chúng tôi gọi lại tư vấn mâm cúng phù hợp.
            </p>
            <form className="relative">
              <input
                type="tel"
                placeholder="SĐT của bạn..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gold-gradient text-[#1A0F0A] px-4 rounded-lg font-bold text-xs uppercase hover:opacity-90 transition-opacity">
                Gửi
              </button>
            </form>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 
               hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/5 
               transition-all duration-500 hover:shadow-[0_0_15px_rgba(24,119,242,0.3)] group"
            >
              <Facebook
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 
               hover:border-[#E4405F] hover:text-[#E4405F] hover:bg-[#E4405F]/5 
               transition-all duration-500 hover:shadow-[0_0_15px_rgba(228,64,95,0.3)] group"
            >
              <Instagram
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 
               hover:border-[#FF0000] hover:text-[#FF0000] hover:bg-[#FF0000]/5 
               transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] group"
            >
              <Youtube
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-gray-600 text-[10px] uppercase tracking-widest">
            Copyright © 2026 . All rights reserved. Design by sotagroup.vn
          </p>
          <div className="flex gap-8 font-sans text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">
              Bảo mật
            </a>
            <a href="#" className="hover:text-white">
              Điều khoản
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#D4AF37] hover:underline"
            >
              Lên trên
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
