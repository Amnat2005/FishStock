import { useParams } from "react-router-dom";
import sampleImage from "../assets/Payut.jpg"; // ใช้รูปอะไรก็ได้ก่อน

function CategoryPage() {
  const { type } = useParams();

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">
        หมวดหมู่: {type}
      </h1>

      {/* Image */}
      <img
        src={sampleImage}
        alt={type}
        className="w-96 max-w-full rounded-lg shadow"
      />

      {/* Description */}
      <p className="text-slate-600">
        รายละเอียดของสัตว์น้ำประเภทนี้
      </p>
    </div>
  );
}

export default CategoryPage;
