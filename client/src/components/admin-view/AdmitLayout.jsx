import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdmitLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex min-h-screen w-full">
        <AdminSidebar open={open} openSidebar={setOpen} />
        <div className="flex flex-1 flex-col ">
          <AdminHeader setOpen={setOpen} />
          <main className="bg-slate-50 flex flex-1 flex-col bg-muted/4 p-4 md:p-6">
            {/* bg-slate-400 */}
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdmitLayout;
