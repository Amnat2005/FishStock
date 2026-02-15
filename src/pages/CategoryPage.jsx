import { useParams } from "react-router-dom";

function CategoryPage() {
  const { type } = useParams();

  const categoryData = {
    "ปลาทะเล": {
      hero: "/assets/Platale1.jpg",
      midImage: "/assets/Platale2.webp",
      bottomImage: "/assets/Platale3.jpg",
      title: "ปลาทะเลในไทย",
      paragraphs: [
        "ปลาทะเลเป็นทรัพยากรสำคัญทั้งด้านอาหารและเศรษฐกิจของประเทศไทย โดยเฉพาะในพื้นที่ชายฝั่งอ่าวไทยและทะเลอันดามัน ซึ่งเป็นแหล่งทำประมงหลักของประเทศ",

        "ในช่วงหลายปีที่ผ่านมา ปริมาณสัตว์น้ำมีแนวโน้มลดลงจากการทำประมงเกินขนาดและผลกระทบจากสภาพภูมิอากาศ ส่งผลให้ฤดูกาลจับปลาและชนิดพันธุ์มีความผันผวนมากขึ้น",

        "มาตรการ เช่น ฤดูปิดอ่าว และการควบคุมเครื่องมือประมง ถูกนำมาใช้เพื่อฟื้นฟูทรัพยากรและสร้างความสมดุลระยะยาว",

        "การปรับตัวของชาวประมงโดยใช้เครื่องมือที่ถูกต้องและติดตามข้อมูลสภาพทะเลอย่างต่อเนื่อง จะช่วยรักษาความยั่งยืนของอาชีพและระบบนิเวศ"
      ]
    },

    "กุ้งทะเล": {
      hero: "/assets/Kungtale.jpg",
      midImage: "/assets/Kungtale2.jpeg",
      bottomImage: "/assets/Kungtale3.webp",
      title: "กุ้งทะเลในไทย",
      paragraphs: [
        "กุ้งทะเลเป็นสัตว์น้ำเศรษฐกิจที่มีบทบาทสำคัญต่อการส่งออกของไทย โดยเฉพาะกุ้งขาวแวนนาไม",

        "การจับจากธรรมชาติลดลงในบางพื้นที่ ทำให้ระบบเพาะเลี้ยงมีบทบาทเพิ่มขึ้น แต่ยังต้องเผชิญกับปัญหาโรคและต้นทุนการผลิต",

        "เทคโนโลยีการเลี้ยงสมัยใหม่และมาตรฐานความปลอดภัยจึงมีความสำคัญมากขึ้น",

        "การพัฒนาคุณภาพและเพิ่มมูลค่าผลผลิต คือแนวทางสู่ความมั่นคงในตลาดโลก"
      ]
    },

    "ปูทะเล": {
      hero: "/assets/Putale1.jpg",
      midImage: "/assets/Putale2.jpg",
      bottomImage: "/assets/Putale3.jpg",
      title: "ปูทะเลในไทย",
      paragraphs: [
        "ปูทะเลเป็นสัตว์น้ำยอดนิยม โดยเฉพาะปูม้าและปูดำในพื้นที่ชายฝั่ง",

        "บางพื้นที่พบว่าปริมาณปูลดลงจากการจับปูไข่นอกกระดอง",

        "ชุมชนประมงหลายแห่งจัดตั้งธนาคารปูเพื่อฟื้นฟูทรัพยากร",

        "การบริหารจัดการร่วมกันคือหัวใจของความยั่งยืน"
      ]
    },

    "หมึกทะเล": {
      hero: "/assets/Muektale1.jpg",
      midImage: "/assets/Muektale2.jpg",
      bottomImage: "/assets/Muektale3.jpeg",
      title: "หมึกทะเลในไทย",
      paragraphs: [
        "หมึกทะเลมีวงจรชีวิตสั้นและฟื้นตัวเร็ว แต่มีความผันผวนตามฤดูกาล",

        "หมึกกล้วยและหมึกกระดองเป็นที่ต้องการสูงในตลาด",

        "อุณหภูมิน้ำและจำนวนเรือประมงมีผลต่อปริมาณจับ",

        "การควบคุมเครื่องมือประมงช่วยรักษาสมดุลทรัพยากร"
      ]
    },

    "หอยทะเล": {
      hero: "/assets/Hoytale1.webp",
      midImage: "/assets/Hoytale2.jpg!s2",
      bottomImage: "/assets/Hoytale3.webp",
      title: "หอยทะเลในไทย",
      paragraphs: [
        "หอยทะเลมีบทบาทสำคัญทั้งการบริโภคและการเพาะเลี้ยง",

        "การเลี้ยงหอยได้รับความนิยมเพิ่มขึ้นจากต้นทุนที่ไม่สูง",

        "คุณภาพน้ำทะเลเป็นปัจจัยสำคัญต่อความปลอดภัย",

        "การควบคุมมาตรฐานช่วยสร้างความเชื่อมั่นแก่ผู้บริโภค"
      ]
    }
  };

  const category = categoryData[type];
  if (!category) return <p>ไม่พบข้อมูล</p>;

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">

      <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-8 md:p-10">

          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12 leading-snug">
            {category.title}
          </h1>

          {/* Hero Image */}
          <img
            src={category.hero}
            alt=""
            className="w-full h-[320px] object-cover rounded-2xl mb-12"
          />

          {/* Paragraphs 1-2 */}
          <div className="space-y-8 text-[17px] leading-8 text-slate-600">
            <p>{category.paragraphs[0]}</p>
            <p>{category.paragraphs[1]}</p>
          </div>

          {/* Mid Image */}
          <img
            src={category.midImage}
            alt=""
            className="w-full h-[300px] object-cover rounded-xl mb-8 mt-8"
          />

          <div className="space-y-8 text-[17px] leading-8 text-slate-600">
            <p>{category.paragraphs[2]}</p>
          </div>


          {/* Bottom Image */}
          <img
            src={category.bottomImage}
            alt=""
            className="w-full h-[300px] object-cover rounded-xl mb-8 mt-8"
          />

          <div className="space-y-8 text-[17px] leading-8 text-slate-600">
            <p>{category.paragraphs[3]}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
