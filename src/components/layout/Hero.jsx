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
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      })
        .from(descRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(btnRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(
          rightImgRef.current,
          { x: 80, opacity: 0, duration: 1, ease: "power4.out" },
          "-=1",
        );
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0A08] pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={bannerImg}
          alt="Background"
          width={1920}
          height={1080}
          fetchPriority="low"
          className="w-full h-full object-cover scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A08] via-[#0F0A08]/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center pt-5">
          <div className="order-1 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6">
              <span
                className="inline-block bg-[#991b1b]/20 text-[#f9e29f] border border-[#c5a059]/30 px-4 py-1.5
                rounded-full text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm"
              >
                🏮 Mừng Đại Hỷ - Khai Trương Hồng Phát
              </span>
            </div>

            <div ref={titleRef} className="will-change-transform">
              <h1 className="font-display text-5xl md:text-6xl xl:text-[80px] font-black text-white leading-[1.1] uppercase drop-shadow-2xl">
                Heo Quay <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E29F] to-[#D4AF37]">
                  Nguyên Con
                </span>
              </h1>
              <span className="font-display text-2xl md:text-4xl xl:text-4xl block mt-3 text-white/90 font-bold tracking-tight">
                GIAO NHANH TRONG NGÀY
              </span>
            </div>

            <p
              ref={descRef}
              className="font-sans italic text-gray-400 text-base md:text-lg xl:text-xl mb-8 max-w-xl leading-relaxed border-l-2
              border-[#991b1b] pl-6 mt-6 mx-auto lg:mx-0"
            >
              Chuyên heo quay nguyên con cúng khai trương, đám tiệc - quay mới
              theo đơn. Lựa chọn số 1 cho các dịp lễ cúng tại Sài Gòn.
            </p>

            <div
              ref={btnRef}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start"
            >
              <a
                href="tel:0908426828"
                className="flex items-center justify-center gap-3 bg-[#991b1b] text-white px-8 py-4 rounded-full font-bold
                text-base xl:text-lg hover:bg-[#b91c1c] hover:scale-105 transition-all shadow-xl shadow-[#991b1b]/30 border border-white/10"
              >
                <Phone size={20} /> 0908.426.828
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white/5 text-white px-8 py-4 rounded-full font-bold text-base xl:text-lg
              hover:bg-white/15 hover:scale-105 transition-all backdrop-blur-md border border-white/20"
              >
                <MessageCircle size={20} /> Đặt Lễ Ngay
              </a>
            </div>
          </div>

          <div ref={rightImgRef} className="relative order-2 hidden lg:block">
            <div
              className="relative z-10 
               aspect-[4/5] 2xl:aspect-square  w-full max-w-[550px] xl:max-w-[650px] 2xl:max-w-[750px] ml-auto
               rounded-[3rem] xl:rounded-[5rem] overflow-hidden border-[6px] border-[#c5a059]/30 
               shadow-2xl shadow-amber-900/20"
            >
              <img
                src={rightHeroImg}
                width="750"
                height="937"
                alt="Heo Quay Hữu Danh Banner"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div
              className="absolute -top-7 -right-7 bg-[#991b1b] text-white 
             p-4 xl:p-6 rounded-2xl shadow-xl z-20
             flex flex-col items-center rotate-12 border border-[#c5a059]/40 
             2xl:scale-105 transition-transform"
            >
              <span className="text-3xl xl:text-4xl font-black font-display leading-none">
                100%
              </span>
              <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-widest text-center leading-tight mt-1">
                Thịt Tươi Sạch
              </span>
            </div>

            <div
              className="absolute -bottom-8 -left-8 bg-gold-gradient text-[#1a0f0a] 
             p-4 xl:p-6 rounded-2xl shadow-xl z-20
             flex flex-col items-center -rotate-12 border border-white/20 
             2xl:scale-105 transition-transform"
            >
              <span className="text-xl xl:text-2xl font-black font-sans uppercase leading-none">
                Giòn Rụm
              </span>
              <span className="text-[9px] xl:text-[10px] font-bold uppercase tracking-widest mt-1">
                Gia Truyền
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-16 flex flex-col items-center gap-2 text-amber-200/30">
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">
            Cuộn xem thêm
          </span>
          <ChevronDown className="animate-bounce" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
