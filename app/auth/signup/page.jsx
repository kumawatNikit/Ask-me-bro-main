"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "@/schema/schema";  
import Link from "next/link";
import { EyeSlash, EyeFill } from "@styled-icons/bootstrap";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const router = useRouter();

  const handleVisible = () => setIsVisible(!isVisible);
  const handleConfirmVisible = () => setIsConfirmVisible(!isConfirmVisible);
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to register. Please try again.");
        }

        const result = await response.json();
        if(result.success=== true){
          router.push("/");
           toast.success(result.message, {
                      position: "top-right",
                    });
        }
      
      } catch (error) {
        toast.error(result.message, {
          position: "top-right",
        });
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);  
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <ToastContainer />
      <div className="w-full max-w-md p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
            Sign Up
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-3">
            {/* Name */}
            <input
              type="text"
              name="username"
              placeholder="username"
              className="w-full border rounded-md p-2 text-sm"
              autoComplete="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs">{formik.errors.username}</div>
            )}

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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
              <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>
            )}

            {/* Terms and Conditions */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1c3a40] hover:bg-[#428690] text-white py-2 rounded-md"
              disabled={isSubmitting}  // Disable button when submitting
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

           
            {/* Login Link */}
            <div className="flex items-end text-sm justify-end">
              <Link href="/" className="text-red-500 text-sm underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
