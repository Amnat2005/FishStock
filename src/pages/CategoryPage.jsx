import { useParams } from "react-router-dom";

function CategoryPage() {
  const { type } = useParams();

  const categoryData = {
    ปลาทะเล: {
      hero: "/assets/Platale1.jpg",
      midImage: "/assets/Platale2.webp",
      bottomImage: "/assets/Platale3.jpg",
      title: "ปลาทะเลในไทย",
      paragraphs: [
        "ปลาทะเลเป็นทรัพยากรสำคัญทั้งด้านอาหารและเศรษฐกิจของประเทศไทย โดยเฉพาะในพื้นที่ชายฝั่งอ่าวไทยและทะเลอันดามัน ซึ่งเป็นแหล่งทำประมงหลักของประเทศ",

        "ในช่วงหลายปีที่ผ่านมา ปริมาณสัตว์น้ำมีแนวโน้มลดลงจากการทำประมงเกินขนาดและผลกระทบจากสภาพภูมิอากาศ ส่งผลให้ฤดูกาลจับปลาและชนิดพันธุ์มีความผันผวนมากขึ้น",

        "มาตรการ เช่น ฤดูปิดอ่าว และการควบคุมเครื่องมือประมง ถูกนำมาใช้เพื่อฟื้นฟูทรัพยากรและสร้างความสมดุลระยะยาว",

        "การปรับตัวของชาวประมงโดยใช้เครื่องมือที่ถูกต้องและติดตามข้อมูลสภาพทะเลอย่างต่อเนื่อง จะช่วยรักษาความยั่งยืนของอาชีพและระบบนิเวศ",
      ],
    },

    กุ้งทะเล: {
      hero: "/assets/Kungtale.jpg",
      midImage: "/assets/Kungtale2.jpeg",
      bottomImage: "/assets/Kungtale3.webp",
      title: "กุ้งทะเลในไทย",
      paragraphs: [
        "กุ้งทะเลเป็นสัตว์น้ำเศรษฐกิจที่มีบทบาทสำคัญต่อการส่งออกของไทย โดยเฉพาะกุ้งขาวแวนนาไม",

        "การจับจากธรรมชาติลดลงในบางพื้นที่ ทำให้ระบบเพาะเลี้ยงมีบทบาทเพิ่มขึ้น แต่ยังต้องเผชิญกับปัญหาโรคและต้นทุนการผลิต",

        "เทคโนโลยีการเลี้ยงสมัยใหม่และมาตรฐานความปลอดภัยจึงมีความสำคัญมากขึ้น",

        "การพัฒนาคุณภาพและเพิ่มมูลค่าผลผลิต คือแนวทางสู่ความมั่นคงในตลาดโลก",
      ],
    },

    ปูทะเล: {
      hero: "/assets/Putale1.jpg",
      midImage: "/assets/Putale2.jpg",
      bottomImage: "/assets/Putale3.jpg",
      title: "ปูทะเลในไทย",
      paragraphs: [
        "ปูทะเลเป็นสัตว์น้ำยอดนิยม โดยเฉพาะปูม้าและปูดำในพื้นที่ชายฝั่ง",

        "บางพื้นที่พบว่าปริมาณปูลดลงจากการจับปูไข่นอกกระดอง",

        "ชุมชนประมงหลายแห่งจัดตั้งธนาคารปูเพื่อฟื้นฟูทรัพยากร",

        "การบริหารจัดการร่วมกันคือหัวใจของความยั่งยืน",
      ],
    },

    หมึกทะเล: {
      hero: "/assets/Muektale1.jpg",
      midImage: "/assets/Muektale2.jpg",
      bottomImage: "/assets/Muektale3.jpeg",
      title: "หมึกทะเลในไทย",
      paragraphs: [
        "หมึกทะเลมีวงจรชีวิตสั้นและฟื้นตัวเร็ว แต่มีความผันผวนตามฤดูกาล",

        "หมึกกล้วยและหมึกกระดองเป็นที่ต้องการสูงในตลาด",

        "อุณหภูมิน้ำและจำนวนเรือประมงมีผลต่อปริมาณจับ",

        "การควบคุมเครื่องมือประมงช่วยรักษาสมดุลทรัพยากร",
      ],
    },

    หอยทะเล: {
      hero: "/assets/Hoytale1.webp",
      midImage: "/assets/Hoytale2.jpg!s2",
      bottomImage: "/assets/Hoytale3.webp",
      title: "หอยทะเลในไทย",
      paragraphs: [
        "หอยทะเลมีบทบาทสำคัญทั้งการบริโภคและการเพาะเลี้ยง",

        "การเลี้ยงหอยได้รับความนิยมเพิ่มขึ้นจากต้นทุนที่ไม่สูง",

        "คุณภาพน้ำทะเลเป็นปัจจัยสำคัญต่อความปลอดภัย",

        "การควบคุมมาตรฐานช่วยสร้างความเชื่อมั่นแก่ผู้บริโภค",
      ],
    },
  };

  const category = categoryData[type];
  if (!category) return <p>ไม่พบข้อมูล</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="bg-white shadow-lg lg:shadow-xl rounded-2xl lg:rounded-3xl 
                      p-6 sm:p-8 md:p-12 lg:p-16 
                      border border-slate-100"
        >
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         font-semibold text-slate-900 tracking-tight leading-snug"
            >
              {category.title}
            </h1>

            <div
              className="h-[3px] w-32 sm:w-40 md:w-52 lg:w-64 
                          bg-gradient-to-r from-sky-500 to-indigo-500 
                          rounded-full mt-5 sm:mt-6"
            ></div>
          </div>

          {/* Hero Image */}
          <div className="group overflow-hidden rounded-2xl lg:rounded-3xl mb-10 sm:mb-14">
            <img
              src={category.hero}
              alt=""
              className="w-full 
                       h-56 sm:h-72 md:h-80 lg:h-[420px]
                       object-cover 
                       group-hover:scale-105 
                       transition duration-500"
            />
          </div>

          {/* Paragraph 1-2 */}
          <div
            className="space-y-6 sm:space-y-8 
                        text-base sm:text-lg 
                        leading-7 sm:leading-9 
                        text-slate-600 
                        max-w-3xl mx-auto"
          >
            <p className="text-slate-700">{category.paragraphs[0]}</p>
            <p>{category.paragraphs[1]}</p>
          </div>

          {/* Mid Image */}
          <div
            className="group overflow-hidden rounded-xl lg:rounded-2xl 
                        my-12 sm:my-16"
          >
            <img
              src={category.midImage}
              alt=""
              className="w-full 
                       h-52 sm:h-64 md:h-72 lg:h-[360px]
                       object-cover 
                       group-hover:scale-105 
                       transition duration-500"
            />
          </div>

          <div
            className="space-y-6 sm:space-y-8 
                        text-base sm:text-lg 
                        leading-7 sm:leading-9 
                        text-slate-600 
                        max-w-3xl mx-auto"
          >
            <p>{category.paragraphs[2]}</p>
          </div>

          {/* Bottom Image */}
          <div
            className="group overflow-hidden rounded-xl lg:rounded-2xl 
                        my-12 sm:my-16"
          >
            <img
              src={category.bottomImage}
              alt=""
              className="w-full 
                       h-52 sm:h-64 md:h-72 lg:h-[360px]
                       object-cover 
                       group-hover:scale-105 
                       transition duration-500"
            />
          </div>

          <div
            className="space-y-6 sm:space-y-8 
                        text-base sm:text-lg 
                        leading-7 sm:leading-9 
                        text-slate-600 
                        max-w-3xl mx-auto"
          >
            <p>{category.paragraphs[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
