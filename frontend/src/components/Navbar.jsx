import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo1 from "../assets/logo1.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
    <style>{`
        .logo{
          width: 100px;
          height: auto;
          padding: 5px;
        }
      `}</style>
    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Left: Title or Logo */}
      <img className="logo" src={logo1} alt="logo" />

      {/* Right: Profile */}
      <div className="relative px-4">
        {/* Profile Icon */}
        <FaUserCircle
          className="text-4xl text-gray-700 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>

            <button
              className="w-full text-left px-4 py-2 hover:bg-red-100 rounded-md text-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Navbar;
