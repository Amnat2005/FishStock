import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-14 bg-blue-900 text-white flex items-center px-6 gap-6">
      <div className="font-bold">FishStock</div>

      <NavLink to="/">Map</NavLink>
      <NavLink to="/graph">Graph</NavLink>
      <NavLink to="/price">Price</NavLink>
    </nav>
  );
}

export default Navbar;
