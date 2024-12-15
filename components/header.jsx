"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const [questionsMenuOpen, setQuestionsMenuOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1c3a40] text-white lg:px-16">
      <div className="container-fluid mx-auto flex justify-between items-center px-4 py-3">
        <div className="items-center">
          <div className="text-2xl font-bold">
            <span>Ask Me, Bro!</span>
          </div>
          <span className="text-sm pulse">Your Go-To Advice</span>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <Link
            href="/"
            className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/ask"
            className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md"
          >
            Ask Question
          </Link>

          {/* Dropdown for Questions */}
          <div
            className="relative"
            onMouseEnter={() => setQuestionsMenuOpen(true)}
            onMouseLeave={() => setQuestionsMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
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
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
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
                <Link href="/faq" className="block px-4 py-2 hover:bg-gray-200">
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

          {/* Dropdown for User */}
          <div
            className="relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              User ▼
            </button>
            {userMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </Link>

                <div className="relative group">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                    Settings
                  </button>
                  {/* Submenu */}
                </div>

                {/* <Link
                  href="/auth/login"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </Link> */}
              </div>
            )}
          </div>

          {/* Dropdown for Blog */}
          <div
            className="relative"
            onMouseEnter={() => setBlogMenuOpen(true)}
            onMouseLeave={() => setBlogMenuOpen(false)}
          >
            <button className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md">
              Blog ▼
            </button>
            {blogMenuOpen && (
              <div className="absolute top-12 left-0 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                <Link
                  href="/blog1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Blog 1
                </Link>
                <div className="group relative">
                  <Link
                    href="/blog2"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Blog 2 ▼
                  </Link>
                  {/* <div className="hidden group-hover:block absolute top-0 left-48 bg-[#eeecec] text-gray-800 rounded shadow-lg w-48">
                    <Link
                      href="/blog2/right-sidebar"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Right Sidebar
                    </Link>
                    <Link
                      href="/blog2/left-sidebar"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Left Sidebar
                    </Link>
                    <Link
                      href="/blog2/full-width"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Full Width
                    </Link>
                  </div> */}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/shortcodes"
            className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md"
          >
            Shortcodes
          </Link>
          <Link
            href="/contact-us"
            className="hover:bg-[#eeecec] hover:text-[#428690] xl:p-3 rounded-md"
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#428690] text-white p-4">
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
          <Link
            href="/questions"
            className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
          >
            Questions
          </Link>
          <Link
            href="/user"
            className="block py-2 hover:bg-[#eeecec] hover:text-gray-800 p-3 rounded-md"
          >
            User
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
            className="block py-2 hover:bg-[#eeecec]  hover:text-gray-800 p-3 rounded-md"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};
export default Header;
