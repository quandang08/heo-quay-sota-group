import { Facebook, Instagram, MapPin, Phone, Clock, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0503] pt-20 pb-10 px-6 border-t border-[#D4AF37]/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Cột 1: Thương hiệu & Sứ mệnh */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#1A0F0A] font-bold text-xl">
                H
              </div>
              <h3 className="font-display text-xl text-white uppercase tracking-wider">
                Heo Quay <span className="text-[#D4AF37]">Hữu Danh</span>
              </h3>
            </div>
            <p className="font-sans text-gray-500 text-sm leading-relaxed italic">
              Sứ mệnh của chúng tôi là mang đến những lễ vật trang trọng, ngon miệng và sạch sẽ nhất cho các nghi lễ truyền thống của gia đình bạn.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#991b1b] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#991b1b] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 className="font-display text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-8">Liên kết nhanh</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Trang Chủ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dịch Vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thư Viện Ảnh</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Khu Vực Giao Hàng</a></li>
            </ul>
          </div>

          {/* Cột 3: Thông tin liên hệ */}
          <div>
            <h4 className="font-display text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-8">Thông tin</h4>
            <ul className="space-y-6 font-sans text-sm text-gray-400">
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

          {/* Cột 4: Tư vấn nhanh */}
          <div>
            <h4 className="font-display text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-8">Tư vấn nhanh</h4>
            <p className="font-sans text-gray-500 text-xs mb-6 italic">Để lại số điện thoại để chúng tôi gọi lại tư vấn mâm cúng phù hợp.</p>
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
        </div>

        {/* Chân trang dưới cùng */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-gray-600 text-[10px] uppercase tracking-widest">
            © 2024 HEO QUAY HỮU DANH. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.
          </p>
          <div className="flex gap-8 font-sans text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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