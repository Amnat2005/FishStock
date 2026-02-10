import { useParams } from "react-router-dom";

function CategoryPage() {
  const { type } = useParams();

  const categoryData = {
    "ปลาทะเล": {
      image: "/assets/Platale.jpg",
      description:
        "ปลาทะเลเป็นแหล่งโปรตีนสำคัญ นิยมบริโภคทั้งแบบสดและแปรรูป พบมากตามชายฝั่งและทะเลลึก",
    },
    "กุ้งทะเล": {
      image: "/assets/Kungtale.jpg",
      description:
        "กุ้งทะเลเป็นสัตว์น้ำเศรษฐกิจ ราคาค่อนข้างสูง นิยมใช้ประกอบอาหารหลากหลายเมนู",
    },
    "ปูทะเล": {
      image: "/assets/Putale.jpg",
      description:
        "ปูทะเลมีเนื้อแน่น รสชาติหวาน นิยมทั้งปูม้าและปูดำ",
    },
    "หมึกทะเล": {
      image: "/assets/Muektale.jpg",
      description:
        "หมึกทะเลมีหลายชนิด เช่น หมึกกล้วย หมึกกระดอง นิยมกินทั้งแบบสดและแห้ง",
    },
    "หอยทะเล": {
      image: "/assets/Hoytale.jpg",
      description:
        "หอยทะเลเป็นแหล่งอาหารที่พบได้ตามฤดูกาล ราคาขึ้นลงตามแหล่งจับ",
    },
  };

  const category = categoryData[type];

  if (!category) {
    return (
      <p className="text-slate-500">
        ไม่พบข้อมูลหมวดหมู่นี้
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        หมวดหมู่: {type}
      </h1>

      <img
        src={category.image}
        alt={type}
        className="w-96 max-w-full rounded-lg shadow"
      />

      <p className="text-slate-600 leading-relaxed">
        {category.description}
      </p>
    </div>
  );
}

export default CategoryPage;
