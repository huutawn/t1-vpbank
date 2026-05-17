import { createFileRoute } from "@tanstack/react-router";
import venue from "@/assets/venue.jpg";

export const Route = createFileRoute("/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện — VPBank Presents T1 in Vietnam" },
      {
        name: "description",
        content:
          "Bối cảnh, quy mô và các con số ấn tượng của sự kiện T1 in Vietnam tại VEC, Đông Anh, Hà Nội.",
      },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={venue}
          alt="VEC Hà Nội"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Chương 1 · Bối cảnh & Quy mô
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            Một sự kiện <span className="text-primary">cột mốc</span> của
            eSports Việt Nam
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Hai đêm diễn ra ngày 20–21/12/2025 tại Trung tâm Triển lãm Việt Nam
            (VEC) — Đông Anh, Hà Nội.
          </p>
        </div>
      </section>

      {/* FACT GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            { k: "Thời gian", v: "20 – 21 / 12 / 2025" },
            { k: "Địa điểm", v: "VEC, Đông Anh, Hà Nội" },
            { k: "Sức chứa", v: "20.000 khán giả" },
            { k: "Phát sóng", v: "FPT Play (độc quyền)" },
            { k: "Bán vé", v: "CTicket.vn" },
            { k: "Trận tiêu điểm", v: "T1 vs All-Star VN (SofM, Optimus...)" },
          ].map((f) => (
            <div key={f.k} className="bg-background p-8">
              <div className="text-xs uppercase tracking-widest text-primary">
                {f.k}
              </div>
              <div className="mt-2 font-display text-2xl">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-24">
          <Block
            no="1.1"
            title="Sức hút từ cái tên T1"
            body="Đội tuyển 6 lần vô địch thế giới (3 lần liên tiếp), sở hữu “Quỷ Vương” Faker — biểu tượng có sức ảnh hưởng toàn cầu. Mỗi chuyến lưu diễn của T1 đều biến thành một lễ hội của cộng đồng Liên Minh Huyền Thoại."
          />
          <Block
            no="1.2"
            title="Sứ mệnh của VPBank"
            body="Vì sao một ngân hàng lại đầu tư mạnh vào eSports? Đây là bước đi chiến lược nhằm trẻ hóa thương hiệu, tiếp cận trực diện thế hệ Gen Z và Gen Alpha — nhóm khách hàng tài chính của tương lai."
          />
          <Block
            no="1.3"
            title="Quy mô hạ tầng"
            body="Việc lựa chọn Trung tâm Triển lãm Việt Nam (VEC) — một trong những mặt bằng tổ chức lớn nhất Đông Nam Á — đã khẳng định vị thế của sự kiện ở tầm cỡ quốc tế, đồng thời chứng minh năng lực vận hành của các đối tác trong nước."
          />
        </div>
      </section>
    </>
  );
}

function Block({
  no,
  title,
  body,
}: {
  no: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <div className="font-display text-6xl text-primary">{no}</div>
      </div>
      <div className="lg:col-span-9">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
