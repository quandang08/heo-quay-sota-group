import { motion } from "framer-motion";
import { ChevronRight, Maximize2, Sparkles } from "lucide-react";
import gallery_1 from "../../assets/images/gallery-1.webp";
import gallery_2 from "../../assets/images/gallery-2.webp";
import gallery_3 from "../../assets/images/gallery-3.webp";
import gallery_4 from "../../assets/images/gallery-4.webp";
import gallery_5 from "../../assets/images/gallery-5.webp";
import gallery_6 from "../../assets/images/gallery-6.webp";
import gallery_7 from "../../assets/images/gallery-7.webp";

const GalleryItem = ({ image, title, category, code, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-[40px] bg-white border border-amber-100/50 cursor-pointer shadow-[0_10px_30px_rgba(217,119,6,0.04)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.1)] transition-all duration-500 ${className}`}
  >
    <div
      className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 
    bg-gradient-to-t from-[#451A03]/90 via-[#451A03]/20 to-transparent p-8 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <span className="bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
          Lò Mới Lên
        </span>
        <span className="text-white/60 text-[10px] font-mono">#{code}</span>
      </div>

      <div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-amber-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] block">
          {category}
        </span>
        <h3 className="text-white font-display text-2xl md:text-3xl leading-tight font-black uppercase">
          {title}
        </h3>

        <div className="pt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md border border-white/30">
            <Maximize2 size={16} />
          </div>
          <span className="text-white text-xs font-sans font-black uppercase tracking-widest">
            Phóng to ảnh
          </span>
        </div>
      </div>
    </div>

    <img
      src={image}
      alt={title}
      loading="lazy"
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
    />
  </motion.div>
);

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-32 bg-[#FDF8F1] relative overflow-hidden px-6"
    >
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-amber-200/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-orange-200/20 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
               <Sparkles className="text-amber-600" size={18} />
               <span className="text-amber-700 uppercase tracking-[0.4em] text-[11px] font-black font-sans">
                 Visual Lookbook
               </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-[#451A03] leading-[1] uppercase tracking-tighter">
              Tuyệt Phẩm <br /> 
              <span className="text-amber-600 italic">Truyền Thống</span>
            </h2>
          </div>
          <div className="lg:w-1/3 border-l-4 border-amber-500 pl-8">
            <p className="text-stone-500 font-sans text-base leading-relaxed italic font-medium">
              Từng bức ảnh là lời cam kết về độ giòn tan nổ cốm của lớp da heo vàng rụm, 
              giữ trọn vẹn vị ngọt thanh từ thịt tươi VietGAP mỗi ngày.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:auto-rows-[160px]">
          <GalleryItem image={gallery_1} title="Heo Quay Nguyên Con Đỏ Rực" category="Grand Celebration" code="MP-GOLD-01" className="md:col-span-8 md:row-span-4" />
          <GalleryItem image={gallery_2} title="Da Heo Giòn Tan" category="The Texture" code="MP-TEX-05" className="md:col-span-4 md:row-span-2" />
          <GalleryItem image={gallery_3} title="Mâm Cúng Khai Trương" category="Rituals" code="MP-LUCK-09" className="md:col-span-4 md:row-span-2" />
          <GalleryItem image={gallery_4} title="Sự Kiện Doanh Nghiệp" category="Corporate" code="MP-B2B-12" className="md:col-span-6 md:row-span-2" />
          <GalleryItem image={gallery_5} title="Heo Sữa Quay Đặc Sản" category="Regional" code="MP-SOU-03" className="md:col-span-3 md:row-span-3" />
          <GalleryItem image={gallery_6} title="Nghệ Thuật Trình Bày" category="Artistry" code="MP-ART-07" className="md:col-span-3 md:row-span-3" />
          <GalleryItem image={gallery_7} title="Giao Hàng Nóng Hổi" category="Reliability" code="MP-FAST-22" className="md:col-span-6 md:row-span-2" />
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent mb-10" />
          <button className="group relative px-14 py-6 overflow-hidden rounded-full border border-amber-500 text-amber-600 font-sans font-black tracking-[0.2em] text-xs transition-all">
            <span className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors uppercase">
              Xem thêm 100+ hình ảnh thực tế{" "}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;