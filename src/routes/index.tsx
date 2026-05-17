import { createFileRoute, Link } from "@tanstack/react-router";
import heroArena from "@/assets/hero-arena.jpg";
import { members } from "@/data/members";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T1 in Vietnam — The Promise Fulfilled" },
      {
        name: "description",
        content:
          "Sự kiện cột mốc của eSports Việt Nam: 20.000 khán giả, 15 triệu lượt xem, Faker và T1 lần đầu tiên đến Hà Nội.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroArena}
          alt="Arena T1 Vietnam"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" />
            VPBank presents · 20–21.12.2025 · Hà Nội
          </div>
          <h1 className="max-w-5xl font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
            T1 IN VIETNAM
            <br />
            <span className="text-primary">THE PROMISE</span>
            <br />
            <span className="text-stroke">FULFILLED</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground text-balance">
            Phân tích sức ảnh hưởng và chiến lược phân phối vé của sự kiện cột
            mốc đưa nhà vô địch thế giới T1 đến với 20.000 khán giả Việt Nam.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/su-kien"
              className="bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:glow"
            >
              Khám phá sự kiện
            </Link>
            <Link
              to="/thanh-vien"
              className="border border-border bg-background/40 px-8 py-4 text-sm font-bold uppercase tracking-widest backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Thành viên T1
            </Link>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            ["20.000", "khán giả trực tiếp"],
            ["1.3 triệu", "PCU livestream"],
            ["15 triệu", "tổng lượt xem"],
            ["5.9tr", "VNĐ vé cao nhất"],
          ].map(([n, l]) => (
            <div key={l} className="border-border p-8 md:p-10">
              <div className="font-display text-4xl text-primary md:text-5xl">
                {n}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Mở đầu
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Khi “Quỷ Vương” đặt chân đến Hà Nội
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground lg:col-span-7">
            <p>
              Sự bùng nổ của eSports tại Việt Nam cùng vị thế huyền thoại của T1
              — đặc biệt là <span className="text-foreground">Faker</span> — đã
              biến chuyến lưu diễn “The Promise Fulfilled” trở thành sự kiện thể
              thao điện tử lớn nhất từng được tổ chức trong nước.
            </p>
            <p>
              Nghiên cứu này đánh giá tầm ảnh hưởng của sự kiện đối với thương
              hiệu <span className="text-foreground">VPBank</span> và cộng đồng,
              đồng thời phân tích sự thành công của mô hình phân phối vé tại quy
              mô 20.000 khán giả trực tiếp và hàng triệu lượt xem trực tuyến.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERS PREVIEW */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Đội hình
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Năm nhà vô địch thế giới
              </h2>
            </div>
            <Link
              to="/thanh-vien"
              className="hidden text-sm uppercase tracking-widest text-muted-foreground hover:text-primary md:inline"
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {members.map((m) => (
              <Link
                key={m.id}
                to="/thanh-vien"
                hash={m.id}
                className="group relative aspect-[3/4] overflow-hidden border border-border bg-background transition-all hover:border-primary"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${m.accent} opacity-30 transition-opacity group-hover:opacity-60`}
                />
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute right-3 top-3 font-display text-5xl text-primary/40 md:text-6xl">
                  {m.number}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {m.roleVi}
                  </div>
                  <div className="font-display text-3xl">{m.ign}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden border border-border bg-card p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Tài chính × Công nghệ × Nội dung
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sự kết hợp hoàn hảo giữa VPBank, FPT Play/CTicket và T1 đã định
                nghĩa lại quy mô tổ chức sự kiện eSports tại Việt Nam.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/phan-tich"
                className="bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:glow"
              >
                Đọc phân tích
              </Link>
              <Link
                to="/su-kien"
                className="border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary"
              >
                Chi tiết sự kiện
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
