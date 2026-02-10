
function PricePage() {
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
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: "/assets/kungkao.webp",
    },
    {
      name: "กุ้งลายเสือ",
      type: "กุ้งทะเล",
      price: "120",
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: "/assets/Kunglaisua.png",
    },
    {
      name: "ปูม้า",
      type: "ปูทะเล",
      price: "180",
      note: "ทั้งจากฟาร์มและธรรมชาติ",
      image: "/assets/Puma.png",
    },
    {
      name: "ปูดำ",
      type: "ปูทะเล",
      price: "180",
      note: "ทั้งจากฟาร์มและธรรมชาติ",
      image: "/assets/Pudum.jpg",
    },
    {
      name: "หมึกกล้วย",
      type: "หมึกทะเล",
      price: "90",
      note: "เลี้ยงง่าย ราคาย่อมเยา",
      image: "/assets/Muekkuy.png",
    },
    {
      name: "หมึกกระดอง",
      type: "หมึกทะเล",
      price: "90",
      note: "เลี้ยงง่าย ราคาย่อมเยา",
      image: "/assets/Muekkadong.jpg",
    },
    {
      name: "หมึกหอม",
      type: "หมึกทะเล",
      price: "90",
      note: "เลี้ยงง่าย ราคาย่อมเยา",
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
      note: "ราคาผันผวนตามฤดูกาล",
      image: "/assets/Hoykang.jpg",
    },
    {
      name: "หอยนางรม",
      type: "หอยทะเล",
      price: "220",
      note: "ราคาผันผวนตามฤดูกาล",
      image: "/assets/Hoynangrom.avif",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800">
        ราคาสัตว์น้ำ
      </h1>

      {/* Card List */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              flex gap-6
              bg-white
              border border-slate-200
              rounded-xl
              p-4
              hover:shadow-md
              transition
            "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-28 object-cover rounded-lg bg-slate-100"
            />

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  {item.name}
                </h2>

                <p className="text-sm text-slate-600 mt-1">
                  ประเภท: {item.type}
                </p>

                <p className="text-sm text-slate-600 mt-1">
                  {item.note}
                </p>
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

      {/* Note */}
      <p className="text-sm text-slate-500">
        * ราคานี้เป็นตัวอย่างเพื่อการศึกษา
      </p>
    </div>
  );
}

export default PricePage;
