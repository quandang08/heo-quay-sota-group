import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, ShoppingBag, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/images/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chặn cuộn trang khi menu đang mở
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Trang Chủ", href: "#" },
    { name: "Về Chúng Tôi", href: "#about-us" },
    { name: "Dịch Vụ", href: "#services" },
    { name: "Bảng Giá", href: "#pricing" },
    { name: "Hình Ảnh", href: "#gallery" },
    { name: "Liên Hệ", href: "#contact" },
  ];

  // Animation xổ xuống từ trên
  const dropdownVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" } 
    },
    opened: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.05 } 
    }
  };

  const itemVariants = {
    closed: { y: -10, opacity: 0 },
    opened: { y: 0, opacity: 1 }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-[#0F0A08]/95 backdrop-blur-lg py-3 border-b border-[#D4AF37]/20 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" width="80" height="80" className="h-14 md:h-20 w-auto object-contain" />
            <Link to="/" className="flex flex-col">
              <h1 className="font-display text-base md:text-lg font-extrabold tracking-wide uppercase">
                <span className="text-white">HEO QUAY</span>
                <span className="ml-2 text-gold-gradient">HỮU DANH</span>
              </h1>
              <span className="text-[7px] md:text-[8px] text-[#D4AF37]/70 tracking-[0.2em] uppercase font-medium">
                Giao tận nơi - Tận tâm phục vụ
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-semibold uppercase tracking-widest text-white/70">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="relative group hover:text-[#D4AF37] transition-colors duration-300">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:0908426828" className="hidden md:flex items-center gap-2 bg-gold-gradient text-[#1a0f0a] rounded-full px-5 py-2.5 border border-[#D4AF37]/30 transition-all font-bold text-xs shadow-lg shadow-gold/10">
                <Phone size={14} /> 0908.426.828
              </a>
              <button className="text-[#D4AF37] hover:text-white transition-colors relative">
                <ShoppingBag size={22} />
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden text-[#D4AF37] p-1 transition-transform active:scale-90"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={dropdownVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="lg:hidden absolute top-full left-0 w-full bg-[#120B09] border-b border-[#D4AF37]/20 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-4 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.a
                    variants={itemVariants}
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex justify-between items-center p-5 text-white/90 font-sans text-lg font-semibold border-b border-white/5 active:bg-[#D4AF37]/10 transition-all rounded-xl"
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-[#D4AF37]/40" />
                  </motion.a>
                ))}
                
                <motion.div variants={itemVariants} className="p-4 mt-2">
                  <a 
                    href="tel:0908426828" 
                    className="w-full bg-gold-gradient text-[#1a0f0a] py-5 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform"
                  >
                    <Phone size={22} /> GỌI: 0908.426.828
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;