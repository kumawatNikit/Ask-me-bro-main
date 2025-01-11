"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "@/schema/schema";
import Link from "next/link";
import { EyeSlash, EyeFill } from "@styled-icons/bootstrap";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import Popup from "@/components/toast/popup";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleVisible = () => setIsVisible(!isVisible);
  const handleConfirmVisible = () => setIsConfirmVisible(!isConfirmVisible);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/public/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to register. Please try again.");
        }

        const result = await response.json();
        if (result.success === true) {
          router.push("/");
          setPopup({ show: true, type: "success", message: result.message });
        }
      } catch (error) {
        setPopup({ show: true, type: "error", message: error.message });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 slide-in">
      {popup.show && (
        <Popup
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ show: false, type: "", message: "" })}
        />
      )}
      <div className="flex bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        {/* Signup Form */}
        <div className="w-1/2 p-8">
          <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#ff7361]">
            Sign Up
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full border rounded-md p-2 text-sm"
              autoComplete="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs">{formik.errors.username}</div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded-md p-2 text-sm"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            )}

            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border rounded-md p-2 text-sm"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div
                onClick={handleVisible}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {isVisible ? (
                  <EyeFill height={15} width={15} />
                ) : (
                  <EyeSlash height={15} width={15} />
                )}
              </div>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-xs">{formik.errors.password}</div>
            )}

            <div className="relative">
              <input
                type={isConfirmVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border rounded-md p-2 text-sm"
                autoComplete="new-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div
                onClick={handleConfirmVisible}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {isConfirmVisible ? (
                  <EyeFill height={15} width={15} />
                ) : (
                  <EyeSlash height={15} width={15} />
                )}
              </div>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-xs">
                {formik.errors.confirmPassword}
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                className="mr-2"
                checked={formik.values.terms}
                onChange={formik.handleChange}
              />
              <label>I agree to the Terms and Conditions</label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <div className="text-red-500 text-xs">{formik.errors.terms}</div>
            )}

            <button
              type="submit"
              className="w-full bg-[#2f3239] hover:bg-[#2f3239] text-white py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="flex items-end text-sm justify-end">
              <Link href="/auth/login" className="text-red-500 text-sm underline">
                Log In
              </Link>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-1/2 bg-[#2f3239] flex items-center justify-center p-8">
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

export default page;
