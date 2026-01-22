import { motion } from "framer-motion";
import { ChevronRight, Maximize2 } from "lucide-react";
import gallery_1 from "../../assets/images/gallery-1.webp";
import gallery_2 from "../../assets/images/gallery-2.webp";
import gallery_3 from "../../assets/images/gallery-3.webp";
import gallery_4 from "../../assets/images/gallery-4.webp";
import gallery_5 from "../../assets/images/gallery-5.webp";
import gallery_6 from "../../assets/images/gallery-6.webp";
import gallery_7 from "../../assets/images/gallery-7.webp";

const GalleryItem = ({ image, title, category, code, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-[32px] bg-[#1a0f0a] cursor-pointer ${className}`}
  >
    <div
      className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 
    bg-gradient-to-t from-[#0e0705] via-[#0e0705]/40 to-transparent p-8 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-2">
        <span className="self-start bg-[#991b1b] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-tighter">
          Premium Choice
        </span>
        <span className="text-gray-400 text-[10px] font-mono opacity-60">
          #{code}
        </span>
      </div>

      <div className="space-y-3">
        <span className="text-[#c5a059] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block">
          {category}
        </span>
        <h3 className="text-white font-display text-2xl md:text-3xl leading-tight font-black uppercase">
          {title}
        </h3>

        <div className="pt-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
            <Maximize2 size={14} />
          </div>
          <span className="text-white text-xs font-sans font-bold">
            Chi Tiết Sản Phẩm
          </span>
        </div>
      </div>
    </div>

    <img
      src={image}
      alt={title}
      loading="lazy"
      width="800"
      height="1000"
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
    />
  </motion.div>
);
const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-32 bg-[#0e0705] relative overflow-hidden px-6"
    >
      <div className="absolute top-1/4 left-10 w-[1px] h-64 bg-gradient-to-b from-transparent via-[#c5a059]/30 to-transparent" />
      <div className="absolute top-1/2 right-10 w-[1px] h-96 bg-gradient-to-b from-transparent via-[#991b1b]/40 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block font-sans">
              Visual Lookbook
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-gold-gradient leading-[1.1] uppercase">
              Tuyệt Phẩm <br /> Truyền Thống
            </h2>
          </div>
          <div className="lg:w-1/3 border-l border-[#991b1b] pl-6">
            <p className="text-gray-500 font-sans text-sm leading-relaxed italic">
              Từng bức ảnh là một lời cam kết về chất lượng. Lớp da heo vàng rụm
              được quay tỉ mỉ bằng than hồng, giữ trọn vẹn vị ngọt thanh của
              thịt tươi sạch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[150px]">
          <GalleryItem
            image={gallery_1}
            title="Heo Quay Nguyên Con Khổng Lồ"
            category="Grand Celebration"
            code="HD-GOLD-01"
            className="md:col-span-8 md:row-span-4"
          />

          <GalleryItem
            image={gallery_2}
            title="Da Heo Quay Giòn Tan"
            category="The Texture"
            code="HD-TEXTURE-05"
            className="md:col-span-4 md:row-span-2"
          />

          <GalleryItem
            image={gallery_3}
            title="Mâm Cúng Khai Trương Hồng Phát"
            category="Rituals"
            code="HD-LUCK-09"
            className="md:col-span-4 md:row-span-2"
          />

          <GalleryItem
            image={gallery_4}
            title="Cung Cấp Cho Sự Kiện Lớn"
            category="Corporate"
            code="HD-B2B-12"
            className="md:col-span-6 md:row-span-2"
          />

          <GalleryItem
            image={gallery_5}
            title="Heo Sữa Quay Đặc Sản Miền Tây"
            category="Regional"
            code="HD-SOU-03"
            className="md:col-span-3 md:row-span-3"
          />

          <GalleryItem
            image={gallery_6}
            title="Nghệ Thuật Trình Bày Lễ Vật"
            category="Artistry"
            code="HD-ART-07"
            className="md:col-span-3 md:row-span-3"
          />

          <GalleryItem
            image={gallery_7}
            title="Giao Hàng Đúng Giờ Lễ"
            category="Reliability"
            code="HD-FAST-22"
            className="md:col-span-6 md:row-span-2"
          />
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="w-px h-20 bg-gradient-to-b from-[#991b1b] to-transparent mb-8" />
          <button className="group relative px-12 py-5 overflow-hidden rounded-full border border-[#c5a059]/40 text-[#c5a059] font-sans font-bold tracking-[0.2em] text-xs transition-all hover:text-[#1a0f0a]">
            <span className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              XEM THÊM 100+ HÌNH ẢNH{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
