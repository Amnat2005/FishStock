import { useState } from "react";

function GraphPage() {
  const [mode, setMode] = useState("quantity"); // quantity | value

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800">
        📊 ข้อมูลสัตว์น้ำ
      </h1>

      {/* Toggle Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode("quantity")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              mode === "quantity"
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
        >
          ปริมาณสัตว์น้ำ
        </button>

        <button
          onClick={() => setMode("value")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              mode === "value"
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
        >
          มูลค่าสัตว์น้ำ
        </button>
      </div>

      {/* Graph Area */}
      <div className="h-80 border-2 border-dashed rounded-lg flex items-center justify-center bg-slate-50">
        {mode === "quantity" ? (
          <span className="text-slate-700 text-3xl">
            กราฟปริมาณสัตว์น้ำ
          </span>
        ) : (
          <span className="text-slate-700 text-3xl">
            กราฟมูลค่าสัตว์น้ำ
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600">
        {mode === "quantity"
          ? "แสดงแนวโน้มปริมาณสัตว์น้ำในช่วงเวลาที่เลือก"
          : "แสดงมูลค่าทางเศรษฐกิจของสัตว์น้ำในช่วงเวลาที่เลือก"}
      </p>
    </div>
  );
}

export default GraphPage;
