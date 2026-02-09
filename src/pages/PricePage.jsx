import payut from "../assets/Payut.jpg";

function PricePage() {
  const data = [
    {
      name: "ปลาทู",
      type: "ปลาทะเล",
      price: "120",
      note: "ปลายอดนิยมในครัวเรือนไทย",
      image: payut,
    },
    {
      name: "ปลากะพง",
      type: "ปลาทะเล",
      price: "180",
      note: "ทั้งจากฟาร์มและธรรมชาติ",
      image: payut,
    },
    {
      name: "ปลานิล",
      type: "ปลาน้ำจืด",
      price: "90",
      note: "เลี้ยงง่าย ราคาย่อมเยา",
      image: payut,
    },
    {
      name: "กุ้งขาว",
      type: "สัตว์น้ำเศรษฐกิจ",
      price: "220",
      note: "ราคาผันผวนตามฤดูกาล",
      image: payut,
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
