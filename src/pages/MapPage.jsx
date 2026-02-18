import { useState } from "react";
import MapPlaceholder from "../components/MapPlaceholder";

function MapPage() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <div
      className="relative min-h-screen flex flex-col gap-6
                 px-4 sm:px-6 lg:px-8
                 py-6 sm:py-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
          แผนที่แหล่งสัตว์น้ำ
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1">
          ระบบแสดงข้อมูลแหล่งจับสัตว์น้ำในประเทศไทย
        </p>
      </div>

      {/* Map Section */}
      <div
        className="relative flex-1
                   h-[420px] sm:h-[520px] lg:h-[650px]
                   rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Map Layer */}
        <div className="absolute inset-0 z-0">
          <MapPlaceholder onSelectSpot={setSelectedSpot} />
        </div>

        {/* Desktop Glass Panel */}
        <div
          className="hidden lg:block absolute top-6 right-6
                     w-[360px] max-h-[85%]
                     bg-white/60 backdrop-blur-2xl
                     border border-white/30
                     rounded-2xl shadow-xl
                     p-5 overflow-y-auto
                     z-50"
        >
          <PanelContent
            selectedSpot={selectedSpot}
            setSelectedSpot={setSelectedSpot}
          />
        </div>

        {/* Mobile Bottom Sheet */}
        <div
          className="lg:hidden absolute bottom-0 left-0 right-0
                     bg-white/85 backdrop-blur-2xl
                     border-t border-slate-200
                     rounded-t-3xl shadow-2xl
                     p-5
                     max-h-[65%]
                     overflow-y-auto
                     z-50"
        >
          <PanelContent
            selectedSpot={selectedSpot}
            setSelectedSpot={setSelectedSpot}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================
   Panel Content Component
   ========================= */

function PanelContent({ selectedSpot, setSelectedSpot }) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          รายละเอียดพื้นที่
        </h2>

        {selectedSpot && (
          <button
            onClick={() => setSelectedSpot(null)}
            className="text-xs text-white
                       bg-slate-700
                       px-3 py-1 rounded-full
                       hover:bg-slate-800
                       transition"
          >
            รีเซ็ต
          </button>
        )}
      </div>

      {selectedSpot ? (
        <div key={selectedSpot.name} className="space-y-5">
          {/* Image */}
          <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-200">
            <img
              src={selectedSpot.image}
              alt={selectedSpot.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                selectedSpot.type === "restricted"
                  ? "text-red-600"
                  : "text-sky-600"
              }`}
            >
              {selectedSpot.name}
            </h3>

            <p className="text-xs text-slate-500">
              พิกัด: {selectedSpot.position[0]}, {selectedSpot.position[1]}
            </p>
          </div>

          <div className="h-px bg-slate-300/50" />

          {/* Info */}
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            {/* ประเภท */}
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {selectedSpot.type === "restricted" ? "🚫" : "🎣"}
              </span>
              <span>
                <strong>ประเภท:</strong>{" "}
                {selectedSpot.type === "restricted"
                  ? "เขตห้ามทำการประมง"
                  : "แหล่งประมง"}
              </span>
            </div>

            {selectedSpot.type === "fishing" ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🐠</span>
                  <span>
                    <strong>สัตว์น้ำเด่น:</strong> {selectedSpot.fish}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg">📊</span>
                  <span>
                    <strong>ปริมาณผลผลิต:</strong> {selectedSpot.production}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-start gap-2">
                <span className="text-lg mt-1">⚠️</span>
                <span>
                  <strong>เหตุผลการห้าม:</strong> {selectedSpot.reason}
                </span>
              </div>
            )}

            <div className="flex items-start gap-2">
              <span className="text-lg mt-1">📝</span>
              <span>
                <strong>รายละเอียด:</strong> {selectedSpot.description}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center text-slate-500 text-sm">
          คลิกหมุดบนแผนที่เพื่อดูรายละเอียด
        </div>
      )}
    </>
  );
}

export default MapPage;
