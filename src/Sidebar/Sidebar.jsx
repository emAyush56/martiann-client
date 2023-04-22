import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sticky top-0 h-screen w-full border-r border-r-gray-300">
      <h1>Sidebar</h1>
      <Link to="/edit-profile">Profile</Link>
    </div>
  );
}

export default Sidebar;
