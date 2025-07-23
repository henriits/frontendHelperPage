import { useState } from "react";
import Sidebar from "./Sidebar";

const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Burger Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 z-40 overflow-y-auto transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block`}
      >
        <Sidebar />
      </aside>

      {/* Optional backdrop on mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
};

export default ResponsiveSidebar;
