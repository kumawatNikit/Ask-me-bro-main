"use client";
import React, { useState, useEffect } from "react";
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validationUpdateSchema } from "@/schema/schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, logout } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "@/components/toast/popup";
import Image from "next/image";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
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
      confirmPassword: "",
    },
    validationSchema: validationUpdateSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/protected/reset-password`, {
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
        if (result.ok) {
          setPopup({ show: true, type: "success", message: "Change Password successful!" });
          // dispatch(
          //   login({
          //     user: result.username,
          //     token: result.token,
          //   })
          // );
          // setUsername(values.username);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 slide-in">
      <div className="flex bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        {/* Login Form */}
        <div className="w-1/2 p-8">
          {popup.show && (
            <Popup
              type={popup.type}
              message={popup.message}
              onClose={() => setPopup({ show: false, type: "", message: "" })}
            />
          )}
         
         
              <h3 className="text-lg font-bold mb-4 border-b pb-2 text-[#ff7361]">Update Password</h3>
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full border rounded-md p-2 text-sm"
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
                    className="w-full border rounded-md p-2 text-sm"
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
                <div className="relative">
                  <input
                    type={isVisible ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    className="w-full border rounded-md p-2 text-sm"
                    value={formik.values.confirmPassword}
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
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2f3239] hover:bg-[#2f3239] text-white py-2 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Update in..." : "Update"}
                </button>
              </form>
          
        
        </div>
        {/* Ask Me Bro Section */}
        <div
          className="w-1/2 bg-[#2f3239] flex items-center justify-center text-white text-2xl font-bold p-8 animate-fade-in"
        >
          <Image
            src="/images/asklogo.jpg"
            alt="Ask Me Bro"
            width={300}
            height={300}
            className="rounded-md" g
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
