import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../../images/image.png";
import { useAuth } from "../../utils/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isActive = (path) => location.pathname === path;
  const [authStatus, setAuthStatus] = useState(isAuthenticated);
  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("User logged out successfully");

  };

  // Update auth status on component mount
  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <nav className="bg-[#043B64]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16r">
        {/* Logo/Heading */}
        <div className="w-52 ml-[54px] font-bold flex justify-between items-center ">
          <img src={image} alt="image" />
        </div>

        {/* Nav links */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate("/")}
            className={`${
              isActive("/") ? "bg-white text-black" : "bg-[#043B64] text-white"
            } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
          >
            Home
          </button>
          {!authStatus && (
            <button
              onClick={() => navigate("/login")}
              className={`${
                isActive("/login")
                  ? "bg-white text-black"
                  : "bg-[#043B64] text-white"
              } hover:bg-white hover:text-black border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
            >
              Login
            </button>
          )}
          {authStatus && (
            <button
              onClick={handleLogout}
              className={`bg-[#043B64] hover:bg-white hover:text-black text-white border-2 px-8 py-1 font-medium cursor-pointer rounded-sm`}
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden mt-4 space-y-4 px-6">
        <Link to="/" className="block text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/login" className="block text-white hover:text-gray-300">
          Login
        </Link>
        <Link to="/signup" className="block text-white hover:text-gray-300">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
