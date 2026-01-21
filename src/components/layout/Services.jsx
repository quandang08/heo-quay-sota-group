import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import service1 from "../../assets/images/service-1.webp";
import service2 from "../../assets/images/service-2.webp";
import service3 from "../../assets/images/service-3.webp";
import service4 from "../../assets/images/service-4.webp";

const services = [
  {
    title: "Heo Quay Đại Hỷ",
    desc: "Phục vụ cúng hỷ, đám tiệc với trọng lượng đa dạng. Da vàng giòn óng ả, thịt ngọt mọng nước.",
    image: service1,
  },
  {
    title: "Cúng Khai Trương Hồng Phát",
    desc: "Trình bày mâm cúng trang trọng, đầy đủ lễ vật, mang lại tài lộc cho gia chủ.",
    image: service2,
  },
  {
    title: "Heo Sữa Quay Đặc Sản",
    desc: "Lựa chọn tinh tế cho các bữa tiệc gia đình, hội nghị. Thịt heo sữa mềm thơm, da giòn tan.",
    image: service3,
  },
  {
    title: "Tiệc Cưới Thượng Hạng",
    desc: "Đẳng cấp bàn tiệc với heo quay nguyên con trang trí long phụng, biểu tượng của hạnh phúc.",
    image: service4,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0F0A08] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-sans text-xs uppercase tracking-[0.4em] mb-4 block">
            Tinh hoa ẩm thực
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#f9e29f] uppercase mb-4">
            Dịch Vụ Cung Cấp
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto opacity-50"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group bg-[#1A0F0A]/50 border border-[#D4AF37]/10 rounded-3xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500 h-full"
              >
                {/* Ảnh dịch vụ */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all
                    duration-700 scale-105 group-hover:scale-110"
                  />
                </div>

                {/* Nội dung text */}
                <div className="p-8">
                  <h4 className="font-display text-2xl text-[#f9e29f] mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    Xem chi tiết <span>&gt;</span>
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
  {`
    .swiper {
      overflow: hidden !important;
      padding-bottom: 80px !important;
      margin-bottom: -40px !important;
    }

    .swiper-pagination {
      bottom: 20px !important;
      position: absolute !important;
    }

    .swiper-pagination-bullet {
      background: #D4AF37 !important;
      opacity: 0.3;
      transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      width: 24px !important;
      border-radius: 10px !important;
    }
  `}
</style>
    </section>
  );
};

export default Services;
