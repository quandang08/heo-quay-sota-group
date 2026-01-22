import { Flame } from "lucide-react";

export const ProcessSection = ({ steps = [] }) => {

  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/5">
      <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-12 flex items-center gap-4">
        <Flame className="text-[#991b1b]" size={40} />
        Quy trình chế biến gia truyền
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37]/50 transition-all group">
            <span className="text-4xl font-black text-[#D4AF37]/20 block mb-4 group-hover:text-[#D4AF37] transition-colors">
              {item.step}
            </span>
            <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-tight">{item.title}</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};