import { Phone, Truck, ShieldCheck } from "lucide-react";

export const SeoSidebar = () => (
  <aside className="lg:col-span-4">
    <div className="sticky top-32 bg-[#991b1b]/10 border border-[#991b1b]/30 p-8 rounded-3xl">
      <h4 className="text-white font-black text-xl mb-6 uppercase tracking-tight">Liên hệ báo giá ngay</h4>
      <p className="text-gray-400 text-sm mb-8 italic">Nhân viên tư vấn sẽ phản hồi trong 5 phút để giúp bạn chọn được loại heo phù hợp nhất.</p>
      <a href="tel:0908426828" className="flex items-center justify-center gap-3 bg-[#991b1b] text-white py-4 rounded-full font-bold hover:bg-[#b91c1c] transition-all shadow-xl shadow-[#991b1b]/20">
        <Phone size={20} /> 0908.426.828
      </a>
      <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <Truck size={16} /> Miễn phí ship nội thành TPHCM
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <ShieldCheck size={16} /> Bảo hành độ giòn sau khi nhận
        </div>
      </div>
    </div>
  </aside>
);