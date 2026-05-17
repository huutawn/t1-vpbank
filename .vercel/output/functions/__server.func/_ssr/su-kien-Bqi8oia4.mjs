import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const venue = "/assets/venue-BqNrlngu.jpg";
function EventPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: venue, alt: "VEC Hà Nội", width: 1600, height: 900, className: "absolute inset-0 h-full w-full object-cover opacity-30", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Chương 1 · Bối cảnh & Quy mô" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 max-w-4xl font-display text-5xl md:text-7xl", children: [
          "Một sự kiện ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "cột mốc" }),
          " của eSports Việt Nam"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "Hai đêm diễn ra ngày 20–21/12/2025 tại Trung tâm Triển lãm Việt Nam (VEC) — Đông Anh, Hà Nội." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-border md:grid-cols-3", children: [{
      k: "Thời gian",
      v: "20 – 21 / 12 / 2025"
    }, {
      k: "Địa điểm",
      v: "VEC, Đông Anh, Hà Nội"
    }, {
      k: "Sức chứa",
      v: "20.000 khán giả"
    }, {
      k: "Phát sóng",
      v: "FPT Play (độc quyền)"
    }, {
      k: "Bán vé",
      v: "CTicket.vn"
    }, {
      k: "Trận tiêu điểm",
      v: "T1 vs All-Star VN (SofM, Optimus...)"
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: f.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl", children: f.v })
    ] }, f.k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-20 px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { no: "1.1", title: "Sức hút từ cái tên T1", body: "Đội tuyển 6 lần vô địch thế giới (3 lần liên tiếp), sở hữu “Quỷ Vương” Faker — biểu tượng có sức ảnh hưởng toàn cầu. Mỗi chuyến lưu diễn của T1 đều biến thành một lễ hội của cộng đồng Liên Minh Huyền Thoại." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { no: "1.2", title: "Sứ mệnh của VPBank", body: "Vì sao một ngân hàng lại đầu tư mạnh vào eSports? Đây là bước đi chiến lược nhằm trẻ hóa thương hiệu, tiếp cận trực diện thế hệ Gen Z và Gen Alpha — nhóm khách hàng tài chính của tương lai." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { no: "1.3", title: "Quy mô hạ tầng", body: "Việc lựa chọn Trung tâm Triển lãm Việt Nam (VEC) — một trong những mặt bằng tổ chức lớn nhất Đông Nam Á — đã khẳng định vị thế của sự kiện ở tầm cỡ quốc tế, đồng thời chứng minh năng lực vận hành của các đối tác trong nước." })
    ] }) })
  ] });
}
function Block({
  no,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl text-primary", children: no }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-muted-foreground", children: body })
    ] })
  ] });
}
export {
  EventPage as component
};
