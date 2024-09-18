import { ListCollapse, LogOut } from "lucide-react";
import React, { useState } from "react";


const AdminHeader = ({setOpen}) => {
 
  return (
    <>
      

      <div className="flex items-center justify-between py-3 px-2  border-b-2 lg:self-end">
        <div className="bg-black text-white rounded-md px-2 py-2 lg:hidden">
          <ListCollapse onClick={() => setOpen(true)}/>
        </div>
        <div className="bg-black flex px-3 py-2 text-white rounded-md gap-2 ">
          <LogOut />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
