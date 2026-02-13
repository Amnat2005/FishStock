import { useState } from "react";
import useCsv from "../hooks/useCsv";
import FishLineChart from "../components/FishLineChart";

function GraphPage() {
  const [mode, setMode] = useState("quantity"); // quantity | value

  // โหลด CSV
  const { data: qtyData, error: qtyErr } = useCsv("/data/2.dofd07_05_0101_02_q.csv");
  const { data: valData, error: valErr } = useCsv("/data/2.dofd07_05_0101_02_v.csv");

  // คีย์ “ตรงกับหัวคอลัมน์ CSV ของคุณ”
  const QTY_KEYS = [
    "ปริมาณรวม",
    "ปริมาณปลาทะเล",
    "ปริมาณกุ้งทะเล",
    "ปริมาณปลาน้ำจืด",
  ];

  const VALUE_KEYS = [
    "มูลค่ารวม",
    "มูลค่าปลาทะเล",
    "มูลค่ากุ้งทะเล",
    "มูลค่าปลาน้ำจืด",
  ];

  const isQty = mode === "quantity";
  const data = isQty ? qtyData : valData;
  const err = isQty ? qtyErr : valErr;
  const keys = isQty ? QTY_KEYS : VALUE_KEYS;

  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800">📊 ข้อมูลสัตว์น้ำ</h1>

      {/* Toggle Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode("quantity")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            mode === "quantity"
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          ปริมาณสัตว์น้ำ
        </button>

        <button
          onClick={() => setMode("value")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            mode === "value"
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          มูลค่าสัตว์น้ำ
        </button>
      </div>

      {/* Graph Area */}
      <div className="h-[420px] border-2 border-dashed rounded-lg bg-slate-50 p-3">
        {err ? (
          <div className="text-red-600">
            โหลดกราฟไม่สำเร็จ: {err}
            <div className="text-sm text-slate-600 mt-2">
              เช็คว่าไฟล์อยู่ที่ public/data และเปิด /data/value.csv ได้
            </div>
          </div>
        ) : data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-600">
            กำลังโหลดข้อมูล...
          </div>
        ) : (
          <FishLineChart data={data} seriesKeys={keys} />
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
