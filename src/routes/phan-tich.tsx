import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/phan-tich")({
  head: () => ({
    meta: [
      { title: "Phân tích — Chiến lược vé & Sức ảnh hưởng" },
      {
        name: "description",
        content:
          "Phân tích chiến lược phân phối vé qua CTicket, scarcity marketing, ưu đãi VPBank và sức ảnh hưởng truyền thông – kinh tế – cộng đồng.",
      },
    ],
  }),
  component: AnalysisPage,
});

const tiers = [
  {
    name: "GA Standard",
    price: "500.000đ",
    perks: ["Khu vực đứng phía sau", "Phù hợp sinh viên"],
  },
  {
    name: "Reserved",
    price: "1.500.000đ",
    perks: ["Ghế ngồi cố định", "Tầm nhìn tốt sân khấu"],
  },
  {
    name: "Premium",
    price: "3.200.000đ",
    perks: ["Khu vực trung tâm", "Quà tặng giới hạn (merch)"],
  },
  {
    name: "Champion VIP",
    price: "5.900.000đ",
    perks: [
      "Hàng đầu sân khấu",
      "“Tâm thư” viết tay",
      "Tương tác trực tiếp với T1",
    ],
  },
];

function AnalysisPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Chương 2 & 3 · Phân tích
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            Vé — đòn bẩy chiến lược của
            <br />
            <span className="text-primary">cả một hệ sinh thái.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Từ kênh phân phối độc quyền tới chiến thuật khan hiếm, mỗi quyết
            định đều phục vụ hai mục tiêu: tối đa hóa giá trị thương hiệu và
            chuyển đổi fan thành khách hàng.
          </p>
        </div>
      </section>

      {/* TICKET TIERS */}
      <section className="bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="font-display text-4xl md:text-5xl">
              Cơ cấu hạng vé & Giá trị gia tăng
            </h2>
            <p className="text-muted-foreground">
              Phân khúc từ 500.000đ đến 5,9 triệu — phủ trọn từ sinh viên đến
              người đi làm. Mỗi hạng vé đi kèm các quyền lợi cộng thêm (add-on)
              tạo cảm giác “không thể bỏ lỡ”.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className="group relative border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <div className="font-display text-5xl text-primary/30">
                  0{i + 1}
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.name}
                </div>
                <div className="mt-1 font-display text-3xl">{t.price}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Chiến lược phân phối
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Ba lớp đòn bẩy
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            tag="CTicket.vn"
            title="Kênh phân phối độc quyền"
            body="Một nền tảng duy nhất đảm bảo tính minh bạch, hạn chế tối đa vé giả và đầu cơ. Hệ thống định danh người mua giúp truy vết vé khi cần thiết."
          />
          <Card
            tag="Scarcity"
            title="Chiến thuật khan hiếm"
            body="Tốc độ “cháy vé” trong vài giờ. BTC liên tục “tạo nhiệt” bằng việc công bố nhỏ giọt sơ đồ chỗ ngồi, lineup show match và quà tặng giới hạn."
          />
          <Card
            tag="VPBank"
            title="Ưu đãi đặc quyền chủ thẻ"
            body="Chủ thẻ VPBank được ưu tiên mua vé trước. Đây là cách ngân hàng chuyển đổi fan eSports thành khách hàng tài chính — mở thẻ để có quyền mua vé."
          />
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-y border-border bg-gradient-to-b from-card/40 to-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Chương 3 · Sức ảnh hưởng
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Ba mặt trận, một kỷ lục
            </h2>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            <Impact
              h="Truyền thông"
              big="1.3M"
              sub="PCU livestream"
              body="Hơn 30 triệu lượt xem cộng dồn qua FPT Play, biến T1 in Vietnam thành sự kiện eSports được theo dõi nhiều nhất lịch sử Việt Nam."
            />
            <Impact
              h="Kinh tế & Thương hiệu"
              big="VPBank"
              sub="brand uplift"
              body="VPBank định vị thành công là ngân hàng tiên phong ủng hộ phong cách sống hiện đại của giới trẻ. VEC & FPT Play chứng minh năng lực vận hành chuẩn quốc tế."
            />
            <Impact
              h="Cộng đồng"
              big="20K"
              sub="khán giả on-site"
              body="Xóa bỏ định kiến về game, đưa eSports thành loại hình giải trí cao cấp. Kích cầu du lịch sự kiện — khán giả từ miền Nam và quốc tế đổ về Hà Nội."
            />
          </div>
        </div>
      </section>

      {/* LESSONS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Phần 3 · Bài học
            </div>
            <h2 className="mt-4 font-display text-4xl">
              Đánh giá & Bài học kinh nghiệm
            </h2>
          </div>
          <div className="space-y-8 lg:col-span-8">
            <Lesson
              k="Thành công"
              v="Sự kết hợp hoàn hảo giữa Tài chính (VPBank) – Công nghệ (FPT Play / CTicket) – Nội dung (T1)."
            />
            <Lesson
              k="Hạn chế"
              v="Áp lực hệ thống khi lượng truy cập mua vé quá lớn; vấn đề kiểm soát thị trường vé chợ đen vẫn còn tồn tại."
            />
            <Lesson
              k="Bài học"
              v="Cách khai thác “quyền năng người hâm mộ” (Fandom Power) trong kinh doanh sự kiện — biến cảm xúc thành chuyển đổi thương mại."
            />
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Phần 4 · Kết luận
          </div>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-6xl">
            Một cột mốc đã được đặt.{" "}
            <span className="text-primary">
              Và còn nhiều cột mốc khác đang chờ.
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            “The Promise Fulfilled” khẳng định Việt Nam đủ năng lực đăng cai các
            sự kiện eSports tầm cỡ quốc tế. Triển vọng đưa các siêu sao toàn cầu
            khác về Việt Nam đã không còn là câu hỏi “liệu có thể” — mà là “khi
            nào”.
          </p>
        </div>
      </section>
    </>
  );
}

function Card({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group border border-border bg-card p-8 transition-all hover:border-primary hover:bg-card/80">
      <div className="inline-block border border-primary/40 px-2 py-1 text-[10px] uppercase tracking-widest text-primary">
        {tag}
      </div>
      <h3 className="mt-4 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Impact({
  h,
  big,
  sub,
  body,
}: {
  h: string;
  big: string;
  sub: string;
  body: string;
}) {
  return (
    <div className="bg-background p-10">
      <div className="text-xs uppercase tracking-widest text-primary">{h}</div>
      <div className="mt-6 font-display text-6xl text-foreground">{big}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {sub}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Lesson({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-l-2 border-primary pl-6">
      <div className="text-xs uppercase tracking-widest text-primary">{k}</div>
      <p className="mt-2 text-lg text-foreground/90">{v}</p>
    </div>
  );
}
