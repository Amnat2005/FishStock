import { useState } from "react";

function PricePage() {
  const [search, setSearch] = useState("");

  const data = [
    {
      name: "ปลาทู",
      type: "ปลาทะเล",
      price: "120",
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: "/assets/Pla2.jpg",
    },
    {
      name: "ปลากะพงขาว",
      type: "ปลาทะเล",
      price: "120",
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: "/assets/Plakapongkao.jpg",
    },
    {
      name: "ปลาอินทรี",
      type: "ปลาทะเล",
      price: "120",
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: "/assets/PlainC.jfif",
    },
    {
      name: "กุ้งขาว",
      type: "กุ้งทะเล",
      price: "120",
      note: "นิยมในร้านอาหาร",
      image: "/assets/kungkao.webp",
    },
    {
      name: "กุ้งลายเสือ",
      type: "กุ้งทะเล",
      price: "120",
      note: "ขนาดใหญ่ เนื้อแน่น",
      image: "/assets/Kunglaisua.png",
    },
    {
      name: "ปูม้า",
      type: "ปูทะเล",
      price: "180",
      note: "นิยมทั้งจากธรรมชาติและฟาร์ม",
      image: "/assets/Puma.png",
    },
    {
      name: "ปูดำ",
      type: "ปูทะเล",
      price: "180",
      note: "เนื้อหวาน ราคาแรง",
      image: "/assets/Pudum.jpg",
    },
    {
      name: "หมึกกล้วย",
      type: "หมึกทะเล",
      price: "90",
      note: "นิยมย่าง / ผัด",
      image: "/assets/Muekkuy.png",
    },
    {
      name: "หมึกกระดอง",
      type: "หมึกทะเล",
      price: "90",
      note: "เนื้อแน่น",
      image: "/assets/Muekkadong.jpg",
    },
    {
      name: "หมึกหอม",
      type: "หมึกทะเล",
      price: "90",
      note: "กลิ่นหอมเฉพาะตัว",
      image: "/assets/Muekhom.webp",
    },
    {
      name: "หอยแมลงภู่",
      type: "หอยทะเล",
      price: "220",
      note: "ราคาผันผวนตามฤดูกาล",
      image: "/assets/Hoymangpu.jfif",
    },
    {
      name: "หอยแครง",
      type: "หอยทะเล",
      price: "220",
      note: "นิยมลวกจิ้ม",
      image: "/assets/Hoykang.jpg",
    },
    {
      name: "หอยนางรม",
      type: "หอยทะเล",
      price: "220",
      note: "นิยมกินสด",
      image: "/assets/Hoynangrom.avif",
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">ราคาสัตว์น้ำ</h1>

        {/* Search */}
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="ค้นหาชื่อสัตว์น้ำ"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"

          />

          <button
            className="
              px-5 py-2
              bg-blue-800
              text-white
              rounded-lg
              text-sm
              hover:bg-blue-600
              transition
            "
          >
            ค้นหา
          </button>
        </div>
      </div>

      {/* Card List */}
      <div className="space-y-4">
        {filteredData.length === 0 && (
          <p className="text-slate-500 text-center">
            ไม่พบข้อมูลสัตว์น้ำที่ค้นหา
          </p>
        )}

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col md:flex-row gap-6
              bg-white
              border border-slate-200
              rounded-xl
              p-4
              hover:shadow-md
              transition
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-40 h-40 md:h-28 object-cover rounded-lg bg-slate-100"
            />

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  {item.name}
                </h2>

                <p className="text-sm text-slate-600 mt-1">
                  ประเภท: {item.type}
                </p>

                <p className="text-sm text-slate-600 mt-1">{item.note}</p>
              </div>

              <div className="mt-3">
                <span className="text-lg font-bold text-blue-700">
                  {item.price} บาท / กก.
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500">
        * ราคานี้เป็นตัวอย่างเพื่อการศึกษา
      </p>
    </div>
  );
}

export default PricePage;
