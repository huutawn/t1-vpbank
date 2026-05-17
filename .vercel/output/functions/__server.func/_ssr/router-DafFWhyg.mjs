import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-ljFNJtzR.css";
const nav = [
  { to: "/", label: "Trang chủ" },
  { to: "/su-kien", label: "Sự kiện" },
  { to: "/thanh-vien", label: "Thành viên T1" },
  { to: "/phan-tich", label: "Phân tích" }
];
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-2 font-display text-xl font-bold tracking-widest",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center bg-primary text-primary-foreground", children: "T1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "VN",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." }),
            "2025"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        className: "text-muted-foreground transition-colors hover:text-foreground",
        activeProps: { className: "text-primary" },
        activeOptions: { exact: true },
        children: n.label
      },
      n.to
    )) })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl tracking-widest text-foreground", children: "T1 · VIETNAM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm", children: "The Promise Fulfilled — Cột mốc lịch sử của eSports Việt Nam." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-semibold uppercase text-foreground", children: "Sự kiện" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "VEC, Đông Anh, Hà Nội" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "20–21 / 12 / 2025" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-semibold uppercase text-foreground", children: "Đối tác" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "VPBank · FPT Play · CTicket · Riot Games" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-border/60 pt-6 text-xs uppercase tracking-widest", children: "© 2025 Nghiên cứu học thuật · Phân tích sự kiện" })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Trang không tồn tại." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-block bg-primary px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
        children: "Về trang chủ"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Đã có lỗi xảy ra" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router.invalidate();
          reset();
        },
        className: "mt-6 bg-primary px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary-foreground",
        children: "Thử lại"
      }
    )
  ] }) });
}
const Route$4 = createRootRouteWithContext()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "T1 in Vietnam — The Promise Fulfilled | Phân tích sự kiện" },
        {
          name: "description",
          content: "Phân tích sức ảnh hưởng và chiến lược phân phối vé của sự kiện VPBank Presents T1 in Vietnam đối với hệ sinh thái eSports Việt Nam."
        }
      ],
      links: [{ rel: "stylesheet", href: appCss }]
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent
  }
);
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "vi", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./thanh-vien-Cgc7qgbg.mjs");
const Route$3 = createFileRoute("/thanh-vien")({
  head: () => ({
    meta: [{
      title: "Thành viên T1 — Đội hình vô địch thế giới"
    }, {
      name: "description",
      content: "Giới thiệu chi tiết 5 thành viên T1: Zeus, Oner, Faker, Gumayusi, Keria."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./su-kien-Bqi8oia4.mjs");
const Route$2 = createFileRoute("/su-kien")({
  head: () => ({
    meta: [{
      title: "Sự kiện — VPBank Presents T1 in Vietnam"
    }, {
      name: "description",
      content: "Bối cảnh, quy mô và các con số ấn tượng của sự kiện T1 in Vietnam tại VEC, Đông Anh, Hà Nội."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./phan-tich-D7uCYjBD.mjs");
const Route$1 = createFileRoute("/phan-tich")({
  head: () => ({
    meta: [{
      title: "Phân tích — Chiến lược vé & Sức ảnh hưởng"
    }, {
      name: "description",
      content: "Phân tích chiến lược phân phối vé qua CTicket, scarcity marketing, ưu đãi VPBank và sức ảnh hưởng truyền thông – kinh tế – cộng đồng."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-qd0sR0GE.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "T1 in Vietnam — The Promise Fulfilled"
    }, {
      name: "description",
      content: "Sự kiện cột mốc của eSports Việt Nam: 20.000 khán giả, 15 triệu lượt xem, Faker và T1 lần đầu tiên đến Hà Nội."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ThanhVienRoute = Route$3.update({
  id: "/thanh-vien",
  path: "/thanh-vien",
  getParentRoute: () => Route$4
});
const SuKienRoute = Route$2.update({
  id: "/su-kien",
  path: "/su-kien",
  getParentRoute: () => Route$4
});
const PhanTichRoute = Route$1.update({
  id: "/phan-tich",
  path: "/phan-tich",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  PhanTichRoute,
  SuKienRoute,
  ThanhVienRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
