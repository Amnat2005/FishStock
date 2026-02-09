import { NavLink } from "react-router-dom";

function Sidebar() {
  const items = [
    { label: "กุ้งทะเล", path: "/category/กุ้งทะเล" },
    { label: "ปูทะเล", path: "/category/ปูทะเล" },
    { label: "หมึกทะเล", path: "/category/หมึกทะเล" },
    { label: "หอยทะเล", path: "/category/หอยทะเล" },
    { label: "สัตว์ทะเลอื่น", path: "/category/สัตว์ทะเลอื่น" },
    { label: "ปลาน้ำจืด", path: "/category/ปลาน้ำจืด" },
    { label: "กุ้งน้ำจืด", path: "/category/กุ้งน้ำจืด" },
    { label: "สัตว์น้ำจืดอื่น", path: "/category/สัตว์น้ำจืดอื่น" },
  ];

  return (
    <aside className="w-64 bg-slate-100 h-full border-r p-4">
      <h2 className="font-semibold mb-4 text-slate-700">
        ประเภทสัตว์น้ำ
      </h2>

      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              block p-2 rounded transition
              ${isActive
                ? "bg-blue-200 text-blue-900 font-semibold"
                : "text-slate-700 hover:bg-blue-100 hover:text-blue-900"}
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
