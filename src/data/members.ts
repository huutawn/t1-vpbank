export type Member = {
  id: string;
  ign: string;
  name: string;
  role: string;
  roleVi: string;
  number: string;
  signature: string;
  bio: string;
  highlights: string[];
  accent: string;
};

export const members: Member[] = [
  {
    id: "doran",
    ign: "Doran",
    name: "Choi Hyeon-joon",
    role: "Top Lane",
    roleVi: "Đường trên",
    number: "01",
    signature: "Gragas · Gnar · Aatrox",
    bio: "Đường trên kỳ cựu với lối đánh đa dạng và khả năng cống hiến cho giao tranh tổng xuất sắc. Doran là bản hợp đồng mang tính chiến lược của T1 trong năm 2025, nhanh chóng hòa nhập và góp phần đưa đội tuyển lên ngôi vô địch.",
    highlights: [
      "Vô địch CKTG 2025",
      "Vô địch LCK nhiều lần",
      "Lối đánh hy sinh và kiến tạo giao tranh",
    ],
    accent: "from-red-600 to-red-900",
  },
  {
    id: "oner",
    ign: "Oner",
    name: "Mun Hyeon-jun",
    role: "Jungle",
    roleVi: "Đi rừng",
    number: "02",
    signature: "Lee Sin · Viego · Sejuani",
    bio: "Người đi rừng năng động, đóng vai trò kết nối các đường và mở giao tranh. Oner nổi tiếng với những pha xử lý Lee Sin và khả năng đọc bản đồ thiên tài, là nhịp đập của T1.",
    highlights: [
      "3 lần vô địch CKTG liên tiếp",
      "Người đi rừng được tin cậy nhất LCK",
      "Bạn đồng hành lâu năm của Faker",
    ],
    accent: "from-red-700 to-rose-950",
  },
  {
    id: "faker",
    ign: "Faker",
    name: "Lee Sang-hyeok",
    role: "Mid Lane",
    roleVi: "Đường giữa",
    number: "03",
    signature: "Azir · Ahri · LeBlanc",
    bio: "“Quỷ Vương Bất Tử” — biểu tượng vĩ đại nhất của Liên Minh Huyền Thoại. 6 lần vô địch thế giới, hơn một thập kỷ thống trị, Faker là lý do hàng chục nghìn khán giả Việt Nam đổ về Hà Nội.",
    highlights: [
      "6× Vô địch CKTG (2013, 2015, 2016, 2023, 2024, 2025)",
      "Đại sứ toàn cầu của LMHT",
      "GOAT — Greatest Of All Time",
    ],
    accent: "from-red-500 to-red-950",
  },
  {
    id: "peyz",
    ign: "Peyz",
    name: "Kim Su-hwan",
    role: "AD Carry",
    roleVi: "Xạ thủ",
    number: "04",
    signature: "Zeri · Kai'Sa · Xayah",
    bio: "Tiểu tướng thiên tài với phong cách đánh hổ báo và kỹ năng cá nhân thượng thừa. Rời Gen.G để gia nhập T1, Peyz nhanh chóng chứng minh đẳng cấp xạ thủ hàng đầu tại CKTG 2025.",
    highlights: [
      "Vô địch CKTG 2025",
      "Kỷ lục pentakill tại LCK",
      "Làn gió mới bùng nổ của T1",
    ],
    accent: "from-rose-600 to-red-900",
  },
  {
    id: "keria",
    ign: "Keria",
    name: "Ryu Min-seok",
    role: "Support",
    roleVi: "Hỗ trợ",
    number: "05",
    signature: "Renata · Rakan · Nautilus",
    bio: "Hỗ trợ sáng tạo và linh hoạt bậc nhất thế giới. Keria mở rộng pool tướng tới mức không giới hạn — từ engage tank tới enchanter — và thường là người tạo ra điểm bùng nổ giao tranh cho T1.",
    highlights: [
      "Vô địch CKTG 2023, 2024, 2025",
      "Pool tướng hỗ trợ rộng nhất LCK",
      "MVP giải mùa Xuân LCK 2024",
    ],
    accent: "from-red-800 to-rose-950",
  },
];
