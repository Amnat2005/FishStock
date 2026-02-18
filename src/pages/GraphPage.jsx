import { useState } from "react";
import useCsv from "../hooks/useCsv";
import FishLineChart from "../components/FishLineChart";

function GraphPage() {
  const [mode, setMode] = useState("quantity");

  const { data: qtyData, error: qtyErr } = useCsv(
    "/data/2.dofd07_05_0101_02_q.csv",
  );
  const { data: valData, error: valErr } = useCsv(
    "/data/2.dofd07_05_0101_02_v.csv",
  );

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

  const latest = data.length > 0 ? data[data.length - 1][keys[0]] : "-";

  const max =
    data.length > 0 ? Math.max(...data.map((d) => Number(d[keys[0]]))) : "-";

  const min =
    data.length > 0 ? Math.min(...data.map((d) => Number(d[keys[0]]))) : "-";

  return (
    <div
      className="min-h-screen flex flex-col gap-6 
                  px-4 sm:px-6 lg:px-8 
                  py-6 sm:py-8 lg:py-10
                  bg-gradient-to-br from-sky-50 via-white to-indigo-50"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
          ข้อมูลสัตว์น้ำเชิงสถิติ
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1">
          ระบบแสดงแนวโน้มปริมาณและมูลค่าทางเศรษฐกิจของสัตว์น้ำ
        </p>
      </div>

      {/* Main Card */}
      <div
        className="rounded-2xl
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-xl
      p-4 sm:p-6 lg:p-8"
      >
        {/* Toggle */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={() => setMode("quantity")}
            className={`w-full sm:w-auto px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              mode === "quantity"
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            ปริมาณสัตว์น้ำ
          </button>

          <button
            onClick={() => setMode("value")}
            className={`w-full sm:w-auto px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              mode === "value"
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            มูลค่าสัตว์น้ำ
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-sky-100 to-white rounded-xl p-4 shadow-sm border border-sky-200">
            <p className="text-xs text-sky-700">ค่าล่าสุด</p>
            <p className="text-lg sm:text-xl font-bold text-sky-900">
              {latest}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-white rounded-xl p-4 shadow-sm border border-emerald-200">
            <p className="text-xs text-emerald-700">ค่าสูงสุด</p>
            <p className="text-lg sm:text-xl font-bold text-emerald-900">
              {max}
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-100 to-white rounded-xl p-4 shadow-sm border border-rose-200">
            <p className="text-xs text-rose-700">ค่าต่ำสุด</p>
            <p className="text-lg sm:text-xl font-bold text-rose-900">{min}</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-4 shadow-sm border border-indigo-200">
            <p className="text-xs text-indigo-700">จำนวนปีข้อมูล</p>
            <p className="text-lg sm:text-xl font-bold text-indigo-900">
              {data.length}
            </p>
          </div>
        </div>

        {/* Graph Area */}
        <div
          className="w-full rounded-xl
                      bg-gradient-to-br from-white to-sky-50
                      p-3 sm:p-4 
                      border border-slate-200/50 shadow-inner"
        >
          <div
            className="w-full 
                        h-64 sm:h-80 md:h-96 lg:h-[420px]"
          >
            {err ? (
              <div className="text-red-600 text-sm">
                โหลดกราฟไม่สำเร็จ: {err}
              </div>
            ) : data.length === 0 ? (
              <div className="h-full flex items-center justify-center text-slate-500">
                กำลังโหลดข้อมูล...
              </div>
            ) : (
              <FishLineChart data={data} seriesKeys={keys} />
            )}
          </div>
        </div>

        {/* Description */}
        <div
          className="mt-6 text-sm sm:text-base text-slate-600 
                      flex items-start sm:items-center gap-2"
        >
          <span className="text-lg">📈</span>
          <span>
            {mode === "quantity"
              ? "แนวโน้มปริมาณสัตว์น้ำในช่วงหลายปีที่ผ่านมา"
              : "แนวโน้มมูลค่าทางเศรษฐกิจของสัตว์น้ำในช่วงหลายปีที่ผ่านมา"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GraphPage;
