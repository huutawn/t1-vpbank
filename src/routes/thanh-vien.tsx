import { createFileRoute } from "@tanstack/react-router";
import { members } from "@/data/members";

export const Route = createFileRoute("/thanh-vien")({
  head: () => ({
    meta: [
      { title: "Thành viên T1 — Đội hình vô địch thế giới" },
      {
        name: "description",
        content:
          "Giới thiệu chi tiết 5 thành viên T1: Zeus, Oner, Faker, Gumayusi, Keria.",
      },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Roster · 2025
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">
            Năm cái tên đã viết nên
            <br />
            <span className="text-primary">lịch sử thế giới.</span>
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl divide-y divide-border px-6">
        {members.map((m, i) => (
          <section
            key={m.id}
            id={m.id}
            className="grid scroll-mt-24 gap-10 py-20 lg:grid-cols-12"
          >
            {/* Visual card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden border border-border">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${m.accent}`}
                />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute right-6 top-6 font-display text-[10rem] leading-none text-background/30">
                  {m.number}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    {m.role}
                  </div>
                  <div className="font-display text-6xl text-white">
                    {m.ign}
                  </div>
                  <div className="mt-1 text-sm text-white/70">{m.name}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-primary">
                <span>#{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-border" />
                <span>{m.roleVi}</span>
              </div>
              <h2 className="mt-6 font-display text-5xl md:text-6xl">
                {m.ign}
              </h2>
              <p className="mt-2 text-muted-foreground">{m.name}</p>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90">
                {m.bio}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">
                    Tướng tiêu biểu
                  </div>
                  <div className="mt-2 font-display text-xl">{m.signature}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary">
                    Thành tích
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-primary">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
