import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as members } from "./members-CijUvJfW.mjs";
function MembersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Roster · 2025" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-5xl md:text-7xl", children: [
        "Năm cái tên đã viết nên",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "lịch sử thế giới." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl divide-y divide-border px-6", children: members.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: m.id, className: "grid scroll-mt-24 gap-10 py-20 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${m.accent}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-6 top-6 font-display text-[10rem] leading-none text-background/30", children: m.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/80", children: m.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl text-white", children: m.ign }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/70", children: m.name })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "#",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.roleVi })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-5xl md:text-6xl", children: m.ign }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90", children: m.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: "Tướng tiêu biểu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-xl", children: m.signature })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: "Thành tích" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1 text-sm text-muted-foreground", children: m.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "▸" }),
              h
            ] }, h)) })
          ] })
        ] })
      ] })
    ] }, m.id)) })
  ] });
}
export {
  MembersPage as component
};
