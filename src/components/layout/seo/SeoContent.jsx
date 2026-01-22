import { CheckCircle2, Phone, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const SeoContent = () => {
  return (
    <section className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-8 space-y-8 text-gray-400 leading-[1.8]">
        <h2 className="text-3xl font-display font-black text-white uppercase">
          Dịch vụ heo quay nguyên con uy tín nhất TPHCM
        </h2>
        <p>
          Tại TP. Hồ Chí Minh, việc chuẩn bị một mâm cúng đầy đủ với chú heo
          quay vàng ruộm là nét văn hóa không thể thiếu trong các dịp hỷ sự.
          Hiểu được tầm quan trọng đó, dịch vụ{" "}
          <strong className="text-white">heo quay nguyên con TPHCM</strong> của chúng tôi cam kết
          mang đến sự hài lòng tuyệt đối. Mỗi đơn hàng đều được "quay mới
          100%" ngay sau khi quý khách xác nhận, đảm bảo độ nóng hổi và độ
          giòn đặc trưng khi đến tay gia chủ.
        </p>
        <p>
          Dòng sản phẩm <strong className="text-white">heo sữa quay</strong> (từ 2kg - 5kg) luôn là
          sự lựa chọn hàng đầu cho các mâm cúng vía Thần Tài hoặc đám hỏi
          nhỏ gọn. Với lớp da mỏng như giấy, giòn tan trong miệng kết hợp
          cùng lớp thịt nạc thơm mùi sữa, đây chắc chắn là lễ vật tinh tế
          nhất để dâng lên các đấng thần linh.
        </p>

        <div className="bg-gold-gradient p-1 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#0F0A08] p-8 rounded-[1.7rem]">
            <h3 className="text-white font-bold text-xl mb-4 uppercase">
              Tại sao nên chọn Heo Quay MR.PIG?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Giao hàng hỏa tốc trong 2h tại nội thành",
                "Tặng kèm nước chấm, dưa leo, bánh bao",
                "Giá thành cạnh tranh, ổn định nhất thị trường",
                "Hỗ trợ trang trí hoa văn, chữ 'Hỷ' theo yêu cầu"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <CheckCircle2 className="text-[#D4AF37]" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-display font-black text-white uppercase mt-12">
          Cam kết vàng về chất lượng vệ sinh an toàn thực phẩm
        </h3>
        <p>
          Chúng tôi tuyệt đối nói không với heo đông lạnh lâu ngày hoặc các
          loại thịt không rõ nguồn gốc. Toàn bộ quy trình từ khâu giết mổ
          đến lúc ra lò đều tuân thủ nghiêm ngặt các quy định về VSATTP của
          Bộ Y Tế. Quý khách hoàn toàn có thể yên tâm sử dụng thực phẩm cho
          cả trẻ em và người già.
        </p>
      </div>

      <aside className="lg:col-span-4">
        <div className="sticky top-32 bg-[#991b1b]/10 border border-[#991b1b]/30 p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <h4 className="text-white font-black text-xl mb-6 uppercase tracking-tight">
            Liên hệ báo giá ngay
          </h4>
          <p className="text-gray-400 text-sm mb-8 italic">
            Nhân viên tư vấn sẽ phản hồi trong 5 phút để giúp bạn chọn được
            kích thước heo phù hợp nhất.
          </p>
          
          <a
            href="tel:0908426828"
            className="flex items-center justify-center gap-3 bg-[#991b1b] text-white py-5 rounded-full font-bold hover:bg-[#b91c1c] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Phone size={20} /> 0908.426.828
          </a>

          <div className="mt-8 pt-8 border-t border-white/10 space-y-5">
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="p-2 bg-white/5 rounded-lg"><Truck size={18} className="text-[#D4AF37]" /></div>
              <span>Miễn phí ship quận Tân Bình, Gò Vấp, Quận 12</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="p-2 bg-white/5 rounded-lg"><ShieldCheck size={18} className="text-[#D4AF37]" /></div>
              <span>Bảo hành độ giòn 6 tiếng sau khi nhận</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};