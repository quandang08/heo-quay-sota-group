import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import bannerImg from "../../assets/images/banner.webp";
import rightHeroImg from "../../assets/images/hero.webp";

const Hero = () => {
  const comp = useRef(null);
  const rightImgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      // Thêm một chút delay để đảm bảo trình duyệt đã "paint" xong ảnh LCP
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.8,
      })
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(btnRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(
          rightImgRef.current,
          { x: 50, opacity: 0, duration: 1, ease: "power4.out" },
          "-=1",
        );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0A08]"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={bannerImg}
          alt="Background"
          width={1920}
          height={1080}
          fetchpriority="low"
          loading="eager"
          className="w-full h-full object-cover scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A08] via-[#0F0A08]/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1 flex flex-col justify-center">
            <div className="mb-6">
              <span
                className="inline-block bg-[#991b1b]/20 text-[#f9e29f] border border-[#c5a059]/30 px-4 py-1.5
               rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
              >
                🏮 Mừng Đại Hỷ - Khai Trương Hồng Phát
              </span>
            </div>

            <div ref={titleRef} className="will-change-transform">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] uppercase drop-shadow-2xl">
                Heo Quay <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E29F]">
                  Nguyên Con
                </span>
              </h1>
              <span className="font-display text-3xl md:text-5xl block mt-2 text-white/90 font-bold">
                GIAO NHANH TRONG NGÀY
              </span>
            </div>

            <p
              ref={descRef}
              className="font-sans italic text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed border-l-2 border-[#991b1b] pl-6 mt-6"
            >
              Chuyên heo quay nguyên con cúng khai trương, đám tiệc - quay mới
              theo đơn. Lựa chọn số 1 cho các dịp lễ cúng tại Sài Gòn.
            </p>

            <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="tel:0908426828"
                className="flex items-center justify-center gap-3 bg-[#991b1b] text-white px-8 py-4 rounded-full font-bold
                text-lg hover:bg-[#7f1d1d] hover:scale-105 transition-all shadow-xl shadow-[#991b1b]/30 border
                border-white/10"
              >
                <Phone size={22} /> 0908.426.828
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/15 hover:scale-105 transition-all backdrop-blur-md border border-white/20"
              >
                <MessageCircle size={22} /> Đặt Lễ Ngay
              </a>
            </div>
          </div>

          {/* --- CỘT PHẢI: ẢNH SẢN PHẨM --- */}
          <div ref={rightImgRef} className="relative order-2 hidden lg:block">
            <div
              className="relative z-10 aspect-[4/5] max-w-[750px] max-h-[650px] w-full mx-auto
            rounded-[4rem] overflow-hidden border-4 border-[#c5a059]/40 shadow-2xl shadow-amber-500/10"
            >
              <img
                src={rightHeroImg}
                width="750"
                height="650"
                alt="Heo Quay Hữu Danh Banner"
                fetchpriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* NHÃN 1 (Góc trên phải) */}
            <div
              className="absolute -top-6 -right-6 bg-[#991b1b] text-white p-6 rounded-2xl shadow-2xl
             z-20 flex flex-col items-center rotate-6 border border-[#c5a059]/30"
            >
              <span className="text-4xl font-black font-display">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-center leading-none">
                Thịt Tươi
                <br />
                Sạch
              </span>
            </div>

            {/* NHÃN 2 (Góc dưới trái) */}
            <div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#D4AF37] to-[#F9E29F]
             text-[#1a0f0a] p-6 rounded-2xl shadow-2xl z-20 flex flex-col items-center -rotate-6"
            >
              <span className="text-2xl font-black font-sans">GIÒN RỤM</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Công Thức Độc Quyền
              </span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-amber-200/40 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Xem Danh Mục
          </span>
          <ChevronDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
