"use client";
import React, { useState, useEffect } from "react";
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validationLoginSchema } from "@/schema/schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, logout } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "@/components/toast/popup";
import Image from "next/image";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user, token } = useSelector((state) => state.auth);
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      setUsername(user);
    }
  }, [user, isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/public/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          setPopup({ show: true, type: "error", message: "Invalid username or password. Please try again." });
        }
        const result = await response.json();
        if (result.token) {
          setPopup({ show: true, type: "success", message: "Login successful!" });
          dispatch(
            login({
              user: result.username,
              token: result.token,
            })
          );
          setUsername(values.username);
        }

        router.push("/");
      } catch (error) {
        toast.error(error, { position: "top-right" });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg w-full max-w-md sm:max-w-4xl overflow-hidden">
    {/* Login Form */}
    <div className="w-full sm:w-1/2 p-8">
      {popup.show && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ show: false, type: "", message: "" })}
        />
      )}
      <h3 className="text-lg font-bold mb-4 border-b pb-2 text-[#ff7361]">Login</h3>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border rounded-md p-2 text-sm bg-gray-50"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500 text-xs">{formik.errors.username}</div>
          )}
        </div>
        <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full border rounded-md p-2 text-sm bg-gray-50"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div
            onClick={handleVisible}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {isVisible ? (
              <EyeFill height={18} width={18} />
            ) : (
              <EyeSlash height={18} width={18} />
            )}
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#2f3239] hover:bg-[#2f3239] text-white py-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <Link href="/auth/signup" className="text-red-500 underline">
            Register
          </Link>
        </div>
      </form>
    </div>
    {/* Ask Me Bro Section */}
    <div
      className="hidden sm:flex w-full sm:w-1/2 bg-[#2f3239] flex items-center justify-center text-white text-2xl font-bold p-8"
    >
      <Image
        src="/images/asklogo.jpg"
        alt="Ask Me Bro"
        width={300}
        height={300}
        className="rounded-md"
        priority
      />
    </div>
  </div>
</div>

  );
};

export default Login;
