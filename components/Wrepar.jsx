"use client";
import React, { useState } from "react";
import { ListSettings } from "@styled-icons/remix-line";
import TopBar from "./topbar";
import Header from "./header";
import Footer from "./footer";
import Banner from "./home/banner";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import RightSideLayout from "./RightSideLayout";
import { usePathname } from "next/navigation";

const Wrepar = ({ children }) => {
  const [layout, setLayout] = useState("default");
  const pathname = usePathname();

  // Function to handle layout toggle
  const handleIconClick = () => {
    if (layout === "default") {
      setLayout("leftbar");
    } else if (layout === "leftbar") {
      setLayout("fullwidth");
    } else {
      setLayout("default");
    }
  };

  const hideRightSideLayout =
  pathname === "/auth/login" || pathname === "/auth/signup";
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TopBar />
          <Header />
          <div className="container-fluid">
            <Banner />
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:py-4 lg:px-20 hidden md:block">
              <div className="text-right col-span-12">
                <ListSettings
                  height={30}
                  width={30}
                  onClick={handleIconClick}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            {/* Layouts */}
            {layout === "default" && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
                <div
                  className={`${
                    hideRightSideLayout ? "col-span-12" : "col-span-1 md:col-span-3"
                  }`}
                >
                  {children}
                </div>
                {!hideRightSideLayout && (
                  <div className="col-span-1">
                    <RightSideLayout />
                  </div>
                )}
              </div>
            )}

            {layout === "leftbar" && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
                {!hideRightSideLayout && (
                  <div className="col-span-1">
                    <RightSideLayout />
                  </div>
                )}
                <div
                  className={`${
                    hideRightSideLayout ? "col-span-12" : "col-span-1 md:col-span-3"
                  }`}
                >
                  {children}
                </div>
              </div>
            )}

            {layout === "fullwidth" && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-20">
                <div className="col-span-12">{children}</div>
              </div>
            )}
          </div>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Wrepar;
