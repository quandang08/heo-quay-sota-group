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
    desc: "Mâm cúng trang trọng, đầy đủ lễ nghi, mang ý nghĩa chiêu tài – khai vận – phát lộc.",
    image: service2,
  },
  {
    title: "Heo Sữa Quay Đặc Sản",
    desc: "Phù hợp tiệc gia đình, hội nghị nhỏ. Thịt mềm, da mỏng giòn, hương vị tinh tế.",
    image: service3,
  },
  {
    title: "Tiệc Cưới Thượng Hạng",
    desc: "Heo quay nguyên con trang trí long phụng, biểu trưng hạnh phúc và viên mãn.",
    image: service4,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        py-28 px-6
        bg-gradient-to-b
        from-[#7A1418]
        via-[#5B0F14]
        to-[#3A0A0C]
      "
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="
              block mb-4
              text-[#F5E6A8]
              text-xs uppercase tracking-[0.35em]
            "
          >
            Tinh hoa ẩm thực
          </span>

          <h2
            className="
              font-display font-bold
              text-4xl md:text-5xl
              uppercase
              text-[#FFD966]
              mb-5
            "
          >
            Dịch Vụ Cung Cấp
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-24"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  group h-full
                  bg-[#FFF6E5]
                  rounded-3xl overflow-hidden
                  border border-[#D4AF37]/40
                  hover:border-[#D4AF37]
                  shadow-lg hover:shadow-[#D4AF37]/30
                  transition-all
                "
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="
                      font-display text-2xl
                      text-[#3A0A0C]
                      mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#6B2A1E]
                      text-sm leading-relaxed
                      mb-6
                      line-clamp-3
                    "
                  >
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="
                      inline-flex items-center gap-2
                      text-[#B8860B]
                      text-xs font-bold
                      uppercase tracking-widest
                      transition-all
                      hover:gap-4
                    "
                  >
                    Xem chi tiết →
                  </a>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Custom Style */}
      <style>
        {`
          .swiper {
            padding-bottom: 80px !important;
          }

          .swiper-pagination {
            bottom: 16px !important;
          }

          .swiper-pagination-bullet {
            background: #FFD966 !important;
            opacity: 0.35;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 26px !important;
            height: 6px !important;
            border-radius: 999px !important;
          }
        `}
      </style>
    </section>
  );
};

export default Services;
