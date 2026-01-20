import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, ShoppingBag } from "lucide-react";
import logoImg from "../../assets/images/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hiệu ứng đổi màu khi cuộn trang
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang Chủ", href: "#" },
    { name: "Về Chúng Tôi", href: "#about-us" },
    { name: "Dịch Vụ", href: "#services" },
    { name: "Bảng Giá", href: "#pricing" },
    { name: "Hình Ảnh", href: "#gallery" },
    { name: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0F0A08]/90 backdrop-blur-lg py-3 border-b border-[#D4AF37]/20 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* --- LOGO --- */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Logo Heo Quay Hữu Danh - Giao tận nơi TPHCM"
            className="h-20 w-auto object-contain"
          />

          <Link to="/" className="flex flex-col group">
            <h1 className="font-display text-lg font-extrabold tracking-wide uppercase group-hover:opacity-80 transition-opacity">
              <span className="text-white">HEO QUAY</span>
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E29F]">
                HỮU DANH
              </span>
            </h1>
            <span className="text-[8px] text-[#D4AF37]/70 tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
              Giao tận nơi - Tận tâm phục vụ
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {/* --- MENU --- */}
          <nav className="hidden lg:flex items-end space-x-5 text-xs font-semibold uppercase tracking-widest text-white/70">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative group hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:0908426828"
              className="hidden md:flex items-center gap-3 bg-[linear-gradient(135deg,#c5a059_0%,#f9e29f_50%,#d4af37_100%)] text-[#1a0f0a] 
              rounded-full px-6 py-3 border border-[#D4AF37]/30
            hover:bg-[#3a231b] hover:text-[#0F0A08] hover:border-[#D4AF37] transition-all shadow-2xl shadow-[#261712]/50 group"
            >
              <Phone size={16} className="group-hover:animate-bounce" />
              <span className="font-bold tracking-wider">0908.426.828</span>
            </a>
            
            <button className="text-[#D4AF37] hover:text-white transition-colors">
              <ShoppingBag size={22} />
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-[#D4AF37]">
              <Menu size={30} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
