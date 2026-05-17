import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Trang chủ" },
  { to: "/su-kien", label: "Sự kiện" },
  { to: "/thanh-vien", label: "Thành viên T1" },
  { to: "/phan-tich", label: "Phân tích" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-widest"
        >
          <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground">
            T1
          </span>
          <span>
            VN<span className="text-primary">.</span>2025
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-muted-foreground">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl tracking-widest text-foreground">
              T1 · VIETNAM
            </div>
            <p className="mt-2 max-w-sm">
              The Promise Fulfilled — Cột mốc lịch sử của eSports Việt Nam.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold uppercase text-foreground">
              Sự kiện
            </div>
            <p>VEC, Đông Anh, Hà Nội</p>
            <p>20–21 / 12 / 2025</p>
          </div>
          <div>
            <div className="mb-2 font-semibold uppercase text-foreground">
              Đối tác
            </div>
            <p>VPBank · FPT Play · CTicket · Riot Games</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6 text-xs uppercase tracking-widest">
          © 2025 Nghiên cứu học thuật · Phân tích sự kiện
        </div>
      </div>
    </footer>
  );
}
