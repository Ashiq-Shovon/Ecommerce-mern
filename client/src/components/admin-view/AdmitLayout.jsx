import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdmitLayout = () => {
  return (
    <>
      <div className="bg-slate-400 flex min-h-screen w-full">
        <AdminSidebar />
        <div className="flex flex-1 flex-col ">
          <AdminHeader />
          <main className="flex flex-1 bg-muted/4 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdmitLayout;
