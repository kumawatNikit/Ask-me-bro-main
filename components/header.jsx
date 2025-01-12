"use client";
import { logout } from "@/redux/slices/authSlice";
import { UserCircle } from "@styled-icons/heroicons-solid/UserCircle";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Popup from "./toast/popup";

const Header = () => {
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const [questionsMenuOpen, setQuestionsMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user,token } = useSelector((state) => state.auth);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleLogout = async () => {
    try {
      if (!user) {
        toast.error("User is not authenticated.", {
          position: "top-right",
        })
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/protected/logout/${user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setPopup({ show: true, type: "error", message: "Login failed. Please try again." });
      }

      setPopup({ show: true, type: "success", message: "Logged out successfully!" });
      dispatch(logout());
      router.push("/");
    } catch (error) {
      toast.error(error, {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div>
        {popup.show && (
          <Popup
            type={popup.type}
            message={popup.message}
            onClose={() => setPopup({ show: false, type: "", message: "" })}
          />
        )}
        <header className="bg-[#2f3239] text-white lg:px-16">
          <div className="container-fluid mx-auto flex justify-between items-center px-4 py-3">
            {/* Logo Section */}
            <div className="items-center">
              <div className="text-2xl font-bold">
                <span>Ask Me, Bro!</span>
              </div>
              <span className="text-sm pulse">Your Go-To Advice</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <Link
                href="/"
                className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/ask"
                className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md"
              >
                Ask Question
              </Link>

              {/* Dropdown for Questions */}
              <div
                className="relative"
                onMouseEnter={() => setQuestionsMenuOpen(true)}
                onMouseLeave={() => setQuestionsMenuOpen(false)}
              >
                <button className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md">
                  Questions ▼
                </button>
                {questionsMenuOpen && (
                  <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                    <Link
                      href="/questions/active"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Active Questions
                    </Link>
                    <Link
                      href="/questions/answered"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Answered Questions
                    </Link>
                    <Link
                      href="/questions/archive"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Archive
                    </Link>
                  </div>
                )}
              </div>

              {/* Dropdown for Pages */}
              <div
                className="relative"
                onMouseEnter={() => setPagesMenuOpen(true)}
                onMouseLeave={() => setPagesMenuOpen(false)}
              >
                <button className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md">
                  Pages ▼
                </button>
                {pagesMenuOpen && (
                  <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                    <Link
                      href="/about-us"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/terms"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/shortcodes"
                className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md"
              >
                Shortcodes
              </Link>
              <Link
                href="/contact-us"
                className="hover:bg-[#eeecec] hover:text-[#ff7361] xl:p-3 rounded-md"
              >
                Contact Us
              </Link>
            </nav>

            {/* User Icon */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="text-3xl focus:outline-none"
              >
                <UserCircle height={35} width={35} />

              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                  {isAuthenticated ? (

                    <Link
                      href="/Pages/profile"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                  ) : null}
                  {isAuthenticated ? (
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href="/auth/login"
                      className="block px-4 py-2 hover:bg-gray-200"

                    >
                      Login
                    </Link>
                  )}
                  {isAuthenticated ? (

                    <Link
                      href="/auth/changePassword"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Password Change
                    </Link>
                  ) : null}

                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden bg-[#ff7361] text-white p-4">
              <Link
                href="/"
                className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/ask"
                className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
              >
                Ask Question
              </Link>
              <div className="py-2">
                <button
                  onClick={() => setBlogMenuOpen(!blogMenuOpen)}
                  className="w-full text-left hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
                >
                  Blog ▼
                </button>
                {blogMenuOpen && (
                  <div className="pl-4">
                    <Link href="/blog1" className="block py-2 hover:text-gray-300">
                      Blog 1
                    </Link>
                    <Link
                      href="/blog2/right-sidebar"
                      className="block py-2 hover:text-gray-300"
                    >
                      Blog 2: Right Sidebar
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/shortcodes"
                className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
              >
                Shortcodes
              </Link>
              <Link
                href="/contact-us"
                className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
              >
                Contact Us
              </Link>
            </nav>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
