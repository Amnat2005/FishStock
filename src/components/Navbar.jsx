import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle =
    "relative px-4 py-2 text-sm font-medium transition-all duration-300";

  const activeStyle =
    "text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-sky-400";

  const inactiveStyle =
    "text-slate-300 hover:text-white hover:scale-105";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md 
      bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900
      shadow-lg border-b border-blue-800">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white">
          🐟 FishStock
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
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

      </div>
    </nav>
  );
}

export default Navbar;
