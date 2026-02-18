import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "relative px-4 py-2 text-sm font-medium transition-all duration-300";

  const activeStyle =
    "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-sky-400";

  const inactiveStyle =
    "text-slate-300 hover:text-white";

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md
      bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900
      shadow-lg border-b border-blue-800"
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-wide text-white">
          🐟 FishStock
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Map
          </NavLink>

          <NavLink
            to="/graph"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Graph
          </NavLink>

          <NavLink
            to="/price"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Price
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Map
          </NavLink>

          <NavLink
            to="/graph"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Graph
          </NavLink>

          <NavLink
            to="/price"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Price
          </NavLink>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
