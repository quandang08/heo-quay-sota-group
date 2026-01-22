export const SeoBreadcrumb = ({ items }) => (
  <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
    <a href="/" className="hover:text-[#D4AF37] transition-colors">Trang Chủ</a>
    {items.map((item, index) => (
      <span key={index} className="flex items-center gap-2">
        <span className="text-gray-700">/</span>
        <span className={item.active ? "text-[#D4AF37] font-bold" : ""}>{item.name}</span>
      </span>
    ))}
  </nav>
);