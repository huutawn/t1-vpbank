import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const tiers = [{
  name: "GA Standard",
  price: "500.000đ",
  perks: ["Khu vực đứng phía sau", "Phù hợp sinh viên"]
}, {
  name: "Reserved",
  price: "1.500.000đ",
  perks: ["Ghế ngồi cố định", "Tầm nhìn tốt sân khấu"]
}, {
  name: "Premium",
  price: "3.200.000đ",
  perks: ["Khu vực trung tâm", "Quà tặng giới hạn (merch)"]
}, {
  name: "Champion VIP",
  price: "5.900.000đ",
  perks: ["Hàng đầu sân khấu", "“Tâm thư” viết tay", "Tương tác trực tiếp với T1"]
}];
function AnalysisPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Chương 2 & 3 · Phân tích" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 max-w-4xl font-display text-5xl md:text-7xl", children: [
        "Vé — đòn bẩy chiến lược của",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "cả một hệ sinh thái." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground", children: "Từ kênh phân phối độc quyền tới chiến thuật khan hiếm, mỗi quyết định đều phục vụ hai mục tiêu: tối đa hóa giá trị thương hiệu và chuyển đổi fan thành khách hàng." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card/30 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 grid gap-8 lg:grid-cols-2 lg:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Cơ cấu hạng vé & Giá trị gia tăng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Phân khúc từ 500.000đ đến 5,9 triệu — phủ trọn từ sinh viên đến người đi làm. Mỗi hạng vé đi kèm các quyền lợi cộng thêm (add-on) tạo cảm giác “không thể bỏ lỡ”." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: tiers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative border border-border bg-background p-6 transition-colors hover:border-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-5xl text-primary/30", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-3xl", children: t.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm text-muted-foreground", children: t.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▸" }),
          p
        ] }, p)) })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Chiến lược phân phối" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Ba lớp đòn bẩy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { tag: "CTicket.vn", title: "Kênh phân phối độc quyền", body: "Một nền tảng duy nhất đảm bảo tính minh bạch, hạn chế tối đa vé giả và đầu cơ. Hệ thống định danh người mua giúp truy vết vé khi cần thiết." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { tag: "Scarcity", title: "Chiến thuật khan hiếm", body: "Tốc độ “cháy vé” trong vài giờ. BTC liên tục “tạo nhiệt” bằng việc công bố nhỏ giọt sơ đồ chỗ ngồi, lineup show match và quà tặng giới hạn." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { tag: "VPBank", title: "Ưu đãi đặc quyền chủ thẻ", body: "Chủ thẻ VPBank được ưu tiên mua vé trước. Đây là cách ngân hàng chuyển đổi fan eSports thành khách hàng tài chính — mở thẻ để có quyền mua vé." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-gradient-to-b from-card/40 to-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Chương 3 · Sức ảnh hưởng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Ba mặt trận, một kỷ lục" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-px bg-border md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { h: "Truyền thông", big: "1.3M", sub: "PCU livestream", body: "Hơn 30 triệu lượt xem cộng dồn qua FPT Play, biến T1 in Vietnam thành sự kiện eSports được theo dõi nhiều nhất lịch sử Việt Nam." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { h: "Kinh tế & Thương hiệu", big: "VPBank", sub: "brand uplift", body: "VPBank định vị thành công là ngân hàng tiên phong ủng hộ phong cách sống hiện đại của giới trẻ. VEC & FPT Play chứng minh năng lực vận hành chuẩn quốc tế." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Impact, { h: "Cộng đồng", big: "20K", sub: "khán giả on-site", body: "Xóa bỏ định kiến về game, đưa eSports thành loại hình giải trí cao cấp. Kích cầu du lịch sự kiện — khán giả từ miền Nam và quốc tế đổ về Hà Nội." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Phần 3 · Bài học" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl", children: "Đánh giá & Bài học kinh nghiệm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 lg:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lesson, { k: "Thành công", v: "Sự kết hợp hoàn hảo giữa Tài chính (VPBank) – Công nghệ (FPT Play / CTicket) – Nội dung (T1)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lesson, { k: "Hạn chế", v: "Áp lực hệ thống khi lượng truy cập mua vé quá lớn; vấn đề kiểm soát thị trường vé chợ đen vẫn còn tồn tại." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lesson, { k: "Bài học", v: "Cách khai thác “quyền năng người hâm mộ” (Fandom Power) trong kinh doanh sự kiện — biến cảm xúc thành chuyển đổi thương mại." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Phần 4 · Kết luận" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 max-w-4xl font-display text-4xl md:text-6xl", children: [
        "Một cột mốc đã được đặt.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Và còn nhiều cột mốc khác đang chờ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-muted-foreground", children: "“The Promise Fulfilled” khẳng định Việt Nam đủ năng lực đăng cai các sự kiện eSports tầm cỡ quốc tế. Triển vọng đưa các siêu sao toàn cầu khác về Việt Nam đã không còn là câu hỏi “liệu có thể” — mà là “khi nào”." })
    ] }) })
  ] });
}
function Card({
  tag,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group border border-border bg-card p-8 transition-all hover:border-primary hover:bg-card/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block border border-primary/40 px-2 py-1 text-[10px] uppercase tracking-widest text-primary", children: tag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: body })
  ] });
}
function Impact({
  h,
  big,
  sub,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: h }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-display text-6xl text-foreground", children: big }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: sub }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: body })
  ] });
}
function Lesson({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-primary pl-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-foreground/90", children: v })
  ] });
}
export {
  AnalysisPage as component
};
