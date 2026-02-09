import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MapPage from "./pages/MapPage";
import GraphPage from "./pages/GraphPage";
import PricePage from "./pages/PricePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-auto bg-slate-50">
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/graph" element={<GraphPage />} />
            <Route path="/price" element={<PricePage />} />

            {/* Sidebar */}
            <Route path="/category/:type" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
