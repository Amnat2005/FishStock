import MapPlaceholder from "../components/MapPlaceholder";

function MapPage() {
  return (
    <div className="h-full flex flex-col gap-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          แผนที่แหล่งสัตว์น้ำ
        </h1>
        <p className="text-sm text-slate-500">
          แสดงข้อมูลพื้นที่เพาะเลี้ยงและแหล่งจับสัตว์น้ำ
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Map */}
        <div className="lg:col-span-3">
          <MapPlaceholder />
        </div>

        {/* Info Panel */}
        <div className="bg-white border rounded-lg p-4">
          <h2 className="font-semibold mb-2">
            ข้อมูลพื้นที่
          </h2>

          <ul className="text-sm text-slate-600 space-y-1">
            <li>📍 จังหวัด: -</li>
            <li>🐟 ประเภทสัตว์น้ำ: -</li>
            <li>📊 ปริมาณผลผลิต: -</li>
          </ul>

          <div className="mt-4 text-xs text-slate-400">
            * ข้อมูลตัวอย่าง
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
