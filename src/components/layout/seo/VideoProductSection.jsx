import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    title: "Heo Sữa Quay",
    desc: "Trọng lượng 2kg - 4kg",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400",
  },
  {
    id: 2,
    title: "Heo Quay Trung",
    desc: "Trọng lượng 5kg - 10kg",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=400",
  },
  {
    id: 3,
    title: "Heo Quay Đại",
    desc: "Trọng lượng 11kg - 25kg",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400",
  },
];

export const VideoProductSection = () => {
  return (
    <section className="py-24 bg-[#0a0504] -mx-6 px-6 mb-20 rounded-[3rem] border border-white/5 shadow-inner">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-8 bg-[#D4AF37]"></div>
              <h2 className="text-3xl font-display font-black text-white uppercase italic">
                Nghệ Thuật Chế Biến
              </h2>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-[#1a0f0d] group border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800"
                className="w-full h-full object-cover opacity-60"
                alt="Process"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-[#D4AF37]/90 backdrop-blur shadow-2xl flex items-center justify-center text-black hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-bold leading-relaxed text-gray-200 italic">
                  "Cận cảnh quy trình tẩm ướp thảo mộc gia truyền và kỹ thuật
                  quay da giòn nổ cốm."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
              Danh mục sản phẩm
            </h3>
            <div className="h-[1px] flex-1 mx-8 bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-4 rounded-3xl group cursor-pointer relative overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all shadow-lg shine-effect"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 text-left">
                  <h4 className="text-[13px] font-black text-[#D4AF37] uppercase mb-1">
                    {product.title}
                  </h4>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-6">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    <span>Xem chi tiết</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
