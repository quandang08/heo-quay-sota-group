import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, ShoppingBag, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../../assets/images/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Trang Chủ", href: "/" },
    { name: "Về Chúng Tôi", href: "/ve-chung-toi" },
    {
      name: "Dịch Vụ",
      href: "/dich-vu",
      submenu: [
        { name: "Heo Quay Nguyên Con", href: "/heo-quay-nguyen-con-tphcm" },
        { name: "Heo Quay Sữa", href: "/heo-quay-sua-tphcm" },
      ],
    },
    { name: "Bảng Giá", href: "/bang-gia-heo-quay" },
    { name: "Liên Hệ", href: "/lien-he" },
  ];

  const dropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" },
    },
    opened: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    closed: { y: -10, opacity: 0 },
    opened: { y: 0, opacity: 1 },
  };

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
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
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Logo"
              width="80"
              height="80"
              className="h-14 md:h-20 w-auto object-contain"
            />
            <Link to="/" className="flex flex-col">
              <h1 className="font-display text-base md:text-lg font-extrabold tracking-wide uppercase">
                <span className="text-white">HEO QUAY</span>
                <span className="ml-2 text-gold-gradient">MR.PIG</span>
              </h1>
              <span className="text-[7px] md:text-[8px] text-[#D4AF37]/70 tracking-[0.2em] uppercase font-medium">
                Giao tận nơi - Tận tâm phục vụ
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-semibold uppercase tracking-widest text-white/70">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group py-4">
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronRight
                        size={10}
                        className="rotate-90 text-[#D4AF37]/50"
                      />
                    )}
                  </Link>

                  <span className="absolute bottom-3 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-500"></span>

                  {link.submenu && (
                    <div
                      className="absolute top-[100%] left-0 w-64 bg-[#120B09] border border-[#D4AF37]/20 pt-2 opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl rounded-xl overflow-hidden backdrop-blur-xl
                    z-[110]"
                    >
                      <div className="bg-gradient-to-b from-[#D4AF37]/10 to-transparent p-1">
                        {link.submenu.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={sub.href}
                            className="block px-6 py-4 text-[10px] text-white/80 hover:text-[#D4AF37] hover:bg-white/5 transition-colors border-b
                          border-white/5 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:0908426828"
                className="hidden md:flex items-center gap-2 bg-gold-gradient text-[#1a0f0a] rounded-full px-5 py-2.5 border
                border-[#D4AF37]/30 transition-all font-bold text-xs shadow-lg shadow-gold/10"
              >
                <Phone size={14} /> 0908.426.828
              </a>
              <button className="text-[#D4AF37] hover:text-white transition-colors relative">
                <ShoppingBag size={22} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-[#D4AF37]"
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
              <nav className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <div key={index} className="flex flex-col">
                    <motion.div variants={itemVariants}>
                      <div
                        onClick={
                          link.submenu
                            ? () => toggleSubmenu(link.name)
                            : () => {
                                setIsMenuOpen(false);
                                navigate(link.href);
                              }
                        }
                        className="flex justify-between items-center p-5 text-white/90 font-sans text-lg font-semibold border-b border-white/5 cursor-pointer"
                      >
                        {link.submenu ? (
                          <span>{link.name}</span>
                        ) : (
                          <Link to={link.href}>{link.name}</Link>
                        )}

                        {link.submenu && (
                          <ChevronRight
                            size={18}
                            className={`transition-transform duration-300 ${
                              activeSubmenu === link.name
                                ? "rotate-90"
                                : "rotate-0"
                            } text-[#D4AF37]/40`}
                          />
                        )}
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {link.submenu && activeSubmenu === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-white/5 overflow-hidden"
                        >
                          {link.submenu.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex justify-between items-center p-4 pl-12 text-white/60 font-sans text-base border-b border-white/5"
                            >
                              {sub.name}
                              <ChevronRight size={14} className="opacity-30" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <motion.div variants={itemVariants} className="mt-6 p-2">
                  <a
                    href="tel:0908426828"
                    className="flex items-center justify-center gap-4 bg-gold-gradient text-[#1a0f0a] py-4 rounded-2xl font-bold text-lg shadow-xl shadow-gold/10 active:scale-95 transition-transform"
                  >
                    <Phone size={22} />
                    GỌI ĐẶT HÀNG NGAY
                  </a>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mt-4">
                    Phục vụ hỏa tốc tận nơi tại TPHCM
                  </p>
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
