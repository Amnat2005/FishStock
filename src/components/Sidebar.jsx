import { NavLink } from "react-router-dom";

function Sidebar() {
  const items = [
    { label: "ปลาทะเล", path: "/category/ปลาทะเล" },
    { label: "กุ้งทะเล", path: "/category/กุ้งทะเล" },
    { label: "ปูทะเล", path: "/category/ปูทะเล" },
    { label: "หมึกทะเล", path: "/category/หมึกทะเล" },
    { label: "หอยทะเล", path: "/category/หอยทะเล" },
  ];

  return (
    <aside
      className="w-64 h-full 
      bg-gradient-to-b from-white to-sky-50
      border-r border-sky-100 
      shadow-sm p-6"
    >
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">ประเภทสัตว์น้ำ</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mt-2"></div>
      </div>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                block px-4 py-2 rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-sky-700 font-semibold shadow-md border border-sky-200"
                    : "text-slate-600 hover:bg-white hover:text-sky-700 hover:shadow-sm"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
