import { useState } from "react";

function PricePage() {
  const [search, setSearch] = useState("");

  const data = [
    {
      name: "ปลาทู",
      type: "ปลาทะเล",
      price: "140",
      note: "เนื้อแน่น มันแทรกเล็กน้อย รสหวานธรรมชาติ นิยมทอด นึ่ง และทำปลาทูต้มเค็ม",
      image: "/assets/Pla2.jpg",
    },
    {
      name: "ปลากะพงขาว",
      type: "ปลาทะเล",
      price: "180",
      note: "เนื้อขาวละเอียด แน่นแต่นุ่ม ไม่คาว เหมาะนึ่งซีอิ๊ว ทอดน้ำปลา และทำสเต๊กปลา",
      image: "/assets/Plakapongkao.jpg",
    },
    {
      name: "ปลาอินทรี",
      type: "ปลาทะเล",
      price: "320",
      note: "เนื้อแน่นเป็นชิ้นสวย ไขมันพอเหมาะ รสเข้ม นิยมทอดแดดเดียวและทำปลาอินทรีเค็ม",
      image: "/assets/PlainC.jfif",
    },
    {
      name: "ปลาจาระเม็ดขาว",
      type: "ปลาทะเล",
      price: "260",
      note: "เนื้อขาวละเอียด แน่น นุ่ม รสหวานธรรมชาติ นิยมทอดและนึ่งซีอิ๊ว",
      image: "/assets/Plajaramedkao.jpg",
    },
    {
      name: "ปลาสำลี",
      type: "ปลาทะเล",
      price: "180",
      note: "เนื้อแน่น ไขมันแทรกเล็กน้อย เหมาะกับทอดน้ำปลา",
      image: "/assets/Plasumlee.jpg",
    },
    {
      name: "ปลาช่อนทะเล",
      type: "ปลาทะเล",
      price: "150",
      note: "เนื้อขาวแน่น ไม่คาวมาก นิยมทำต้มยำและผัดฉ่า",
      image: "/assets/Plasontale2.jpg",
    },
    {
      name: "ปลาสาก",
      type: "ปลาทะเล",
      price: "140",
      note: "เนื้อแน่น เส้นใยชัด เหมาะกับทอดหรือทำแกงส้ม",
      image: "/assets/Plasak.jpg",
    },
    {
      name: "ปลาทรายแดง",
      type: "ปลาทะเล",
      price: "220",
      note: "เนื้อหวาน นุ่ม ก้างไม่มาก นิยมทอดกรอบทั้งตัว",
      image: "/assets/Plasaidang.jpg",
    },
    {
      name: "กุ้งขาว",
      type: "กุ้งทะเล",
      price: "260",
      note: "เนื้อเด้ง หวานธรรมชาติ ขนาดกลาง นิยมเผา ผัด และทำกุ้งอบวุ้นเส้น",
      image: "/assets/kungkao.webp",
    },
    {
      name: "กุ้งลายเสือ",
      type: "กุ้งทะเล",
      price: "380",
      note: "ตัวใหญ่ เนื้อแน่นเด้ง หวานมัน เหมาะสำหรับกุ้งเผาและเมนูพรีเมียม",
      image: "/assets/Kunglaisua.png",
    },
    {
      name: "กุ้งก้ามกรามทะเล",
      type: "กุ้งทะเล",
      price: "420",
      note: "ตัวใหญ่ เนื้อแน่นเด้ง หัวมันเยอะ เหมาะเผาและอบวุ้นเส้น",
      image: "/assets/Kungkamtale.jpg",
    },
    {
      name: "กุ้งแชบ๊วย",
      type: "กุ้งทะเล",
      price: "320",
      note: "เนื้อแน่น หวานเด้ง นิยมทำกุ้งเผาและกุ้งทอดกระเทียม",
      image: "/assets/Kungshabeuy.jpg",
    },
    {
      name: "กุ้งโอคัก",
      type: "กุ้งทะเล",
      price: "380",
      note: "ขนาดใหญ่ เนื้อหวาน มันกุ้งเข้มข้น เหมาะทำเมนูพรีเมียม",
      image: "/assets/KungOcuk.jfif",
    },
    {
      name: "ปูม้า",
      type: "ปูทะเล",
      price: "420",
      note: "เนื้อหวานแน่น กระดองบาง แกะง่าย นิยมทำปูนึ่งและผัดผงกะหรี่",
      image: "/assets/Puma.png",
    },
    {
      name: "ปูดำ",
      type: "ปูทะเล",
      price: "360",
      note: "เนื้อแน่น หวานจัด กระดองเข้ม เนื้อเยอะ เหมาะนึ่งจิ้มซีฟู้ด",
      image: "/assets/Pudum.jpg",
    },
    {
      name: "ปูเนื้อ",
      type: "ปูทะเล",
      price: "420",
      note: "เนื้อแน่น หวานธรรมชาติ เหมาะกับผัดผงกะหรี่",
      image: "/assets/Punuer.jpg",
    },
    {
      name: "ปูหิน",
      type: "ปูทะเล",
      price: "260",
      note: "กระดองแข็ง เนื้อแน่น รสเข้ม เหมาะนึ่งจิ้มซีฟู้ด",
      image: "/assets/Puhin.jfif",
    },
    {
      name: "หมึกกล้วย",
      type: "หมึกทะเล",
      price: "180",
      note: "เนื้อหนาแน่น เคี้ยวหนึบ รสหวานอ่อน ๆ นิยมย่างและผัดพริกเกลือ",
      image: "/assets/Muekkuy.png",
    },
    {
      name: "หมึกกระดอง",
      type: "หมึกทะเล",
      price: "220",
      note: "เนื้อหนาแน่น สีขาวสวย เหมาะทำหมึกผัดไข่เค็มและหมึกนึ่งมะนาว",
      image: "/assets/Muekkadong.jpg",
    },
    {
      name: "หมึกหอม",
      type: "หมึกทะเล",
      price: "200",
      note: "เนื้อแน่น มีกลิ่นหอมเฉพาะตัว หวานธรรมชาติ เหมาะสำหรับย่างทั้งตัว",
      image: "/assets/Muekhom.webp",
    },
    {
      name: "หมึกสาย",
      type: "หมึกทะเล",
      price: "200",
      note: "เนื้อหนึบ เคี้ยวเพลิน เหมาะทำยำและลวกจิ้ม",
      image: "/assets/Mueksai.jfif",
    },
    {
      name: "หมึกกระดอง",
      type: "หมึกทะเล",
      price: "300",
      note: "เนื้อหนา แน่น มีไข่ด้านใน นิยมทำหมึกนึ่งมะนาว",
      image: "/assets/Muekkradong.jpg",
    },
    {
      name: "หอยแมลงภู่",
      type: "หอยทะเล",
      price: "90",
      note: "เนื้อนุ่ม หวานน้ำทะเลอ่อน ๆ นิยมเผาและทำหอยแมลงภู่อบ",
      image: "/assets/Hoymangpu.jfif",
    },
    {
      name: "หอยแครง",
      type: "หอยทะเล",
      price: "220",
      note: "เนื้อแดงสด หวานฉ่ำ นิยมลวกพอสุกและจิ้มซีฟู้ด",
      image: "/assets/Hoykang.jpg",
    },
    {
      name: "หอยนางรม",
      type: "หอยทะเล",
      price: "260",
      note: "เนื้อนุ่ม ฉ่ำน้ำทะเล รสหวานมัน นิยมรับประทานสดพร้อมเครื่องเคียง",
      image: "/assets/Hoynangrom.avif",
    },
    {
      name: "หอยหวาน",
      type: "หอยทะเล",
      price: "260",
      note: "เนื้อหวานกรอบ ขนาดเล็ก นิยมเผาและลวกจิ้ม",
      image: "/assets/Hoywan.jfif",
    },
    {
      name: "หอยเชลล์",
      type: "หอยทะเล",
      price: "420",
      note: "เนื้อสีขาวนวล นุ่มหวาน เหมาะอบเนยกระเทียม",
      image: "/assets/Hoyshell.webp",
    },
    {
      name: "หอยตลับ",
      type: "หอยทะเล",
      price: "180",
      note: "เนื้อเล็ก หวานน้ำทะเลอ่อน ๆ นิยมผัดพริกเผา",
      image: "/assets/Hoytalub.png",
    },
    {
      name: "หอยชักตีน",
      type: "หอยทะเล",
      price: "300",
      note: "เนื้อเหนียวนุ่ม รสหวานมัน นิยมลวกจิ้มซีฟู้ด",
      image: "/assets/Hoychakteen.webp",
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              ราคาสัตว์น้ำ
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              ตรวจสอบราคาสัตว์น้ำทะเลล่าสุด
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="ค้นหาชื่อสัตว์น้ำ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full
              px-4 py-3
              border border-slate-200
              rounded-xl
              bg-white
              text-sm
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-sky-400
              transition
            "
            />
          </div>
        </div>

        {/* Card List (แถวเดียวทุกจอ) */}
        <div className="space-y-6">
          {filteredData.length === 0 && (
            <p className="text-slate-400 text-center">
              ไม่พบข้อมูลสัตว์น้ำที่ค้นหา
            </p>
          )}

          {filteredData.map((item, index) => (
            <div
              key={index}
              className="
              group
              flex flex-col md:flex-row
              gap-6
              bg-white
              border border-slate-200
              rounded-2xl
              p-6
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
            "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="
                w-full md:w-56
                h-52 md:h-36
                object-cover
                rounded-xl
                group-hover:scale-105
                transition duration-300
              "
              />

              {/* Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                      {item.name}
                    </h2>

                    <span className="text-xs sm:text-sm text-sky-600 font-medium">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                    {item.note}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <span className="text-xs text-slate-400">ราคาเฉลี่ย</span>

                  <span className="text-2xl sm:text-3xl font-bold text-sky-700">
                    {item.price}
                    <span className="text-sm font-medium text-slate-500 ml-1">
                      บาท/กก.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 text-center pt-6">
          * ราคานี้เป็นตัวอย่างเพื่อการศึกษา
        </p>
      </div>
    </div>
  );
}

export default PricePage;
