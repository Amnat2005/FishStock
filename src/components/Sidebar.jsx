import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "ปลาทะเล", path: "/category/ปลาทะเล" },
    { label: "กุ้งทะเล", path: "/category/กุ้งทะเล" },
    { label: "ปูทะเล", path: "/category/ปูทะเล" },
    { label: "หมึกทะเล", path: "/category/หมึกทะเล" },
    { label: "หอยทะเล", path: "/category/หอยทะเล" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-50 bg-sky-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        หมวดหมู่
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static top-0 left-0 h-full
        w-72 lg:w-64
        bg-gradient-to-b from-white to-sky-50
        border-r border-sky-100 shadow-lg
        p-6 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        {/* Close button (mobile) */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            className="text-slate-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">
            ประเภทสัตว์น้ำ
          </h2>
          <div className="w-40 h-[3px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mt-2"></div>
        </div>

        {/* Menu */}
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  block px-4 py-2 rounded-xl
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
    </>
  );
}

export default Sidebar;
