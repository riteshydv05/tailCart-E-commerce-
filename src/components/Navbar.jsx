import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Login from "./Login";
import Order from "./Order";

function Navbar() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showOrder, setShowOrder] = React.useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleCartClick = () => setShowOrder(true);
  const handleCloseOrder = () => setShowOrder(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showLogin || showOrder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showLogin, showOrder]);

  return (
    <>
      <div className="w-full md:max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="navbar bg-base-100 shadow-sm">
          {/* Logo + Hamburger */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><a>Home</a></li>
                <li><a>Shop</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">tailCart</a>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end space-x-4">
            <div className="hidden md:block">
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>

            {/* Cart */}
            <div onClick={handleCartClick} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                     1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
                     1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 
                     0 0 1 5.513 7.5h12.974c.576 0 1.059.435 
                     1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 
                     0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 
                     0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>

            {/* Theme */}
            <ThemeToggle />

            {/* Login */}
            <button
              onClick={handleLoginClick}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-base-200 p-6 rounded-xl shadow-xl relative w-full max-w-md max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleCloseLogin}
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}

      {/* Order Modal */}
      {showOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-base-200 p-6 rounded-xl shadow-xl relative w-full max-w-md max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={handleCloseOrder}
            >
              &times;
            </button>
            <Order />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;