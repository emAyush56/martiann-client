import { Routes, Route } from "react-router-dom";
import AppIndex from "./AppIndex/AppIndex";
import Sidebar from "./Sidebar/Sidebar";
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import DateProfile from "./DateProfile/DateProfile";

function App() {
  return (
    <div className="App flex">
      <aside className="w-full min-w-[260px] max-w-[400px]">
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/edit-profile" element={<SidebarProfile />} />
        </Routes>
      </aside>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<AppIndex />} />
          <Route path="/edit-profile" element={<DateProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
