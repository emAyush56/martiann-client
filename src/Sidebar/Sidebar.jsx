import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sticky top-0 h-screen w-full border-r border-r-gray-300 px-4">
      <h1>Sidebar</h1>
      <Link
        to="/edit-profile"
        className="mt-3 block w-fit rounded-2xl bg-theme-purple px-4 py-1 text-white transition-all hover:bg-purple-400"
      >
        Profile - /edit-profile
      </Link>
    </div>
  );
}

export default Sidebar;
