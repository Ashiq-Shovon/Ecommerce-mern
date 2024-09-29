import CommonForm from "@/components/common/CommonForm";
import { Button } from "@/components/ui/button";
import { loginFormControls } from "@/config/index";
import React, { useState } from "react";
import { loginUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();
  function onSubmit() {
    console.log(formData)
    dispatch(loginUser(formData)).then((data) => {
      console.log(data)
      if (data?.payload?.success) {
        toast({
          title: data?.payload.message,
        });
      } else {
        toast({
          title: data?.payload.message
        })
      }
    });
  }
  return (
    <>
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="tex-3xl font-bold tracking-tight text-foreground">
            Login in your account
          </h1>
          <p className="mt-2">
            Create new account
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={loginFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          buttonText={"Login"}
          className={""}
        />
      </div>
    </>
  );
};

export default Login;
