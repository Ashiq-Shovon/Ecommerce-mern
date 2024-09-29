import { ListCollapse, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

const AdminHeader = ({ setOpen }) => {
  const dispatch = useDispatch()
  function handleLogout() {
    dispatch(logoutUser())
  }
  return (
    <>
      <div className="flex items-center justify-between py-3 px-2  border-b-2 lg:self-end">
        <div className="bg-black text-white rounded-md px-2 py-2 lg:hidden">
          <ListCollapse onClick={() => setOpen(true)} />
        </div>
        <Button onClick={handleLogout}>
          <div className="flex items-center gap-2">
            <LogOut />
            Logout
          </div>
        </Button>
      </div>
    </>
  );
};

export default AdminHeader;
