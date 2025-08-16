import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"

export const Signin = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col justify-center">
        <div className="rounded-xl bg-white shadow-xl w-96 text-center p-6">
          <Heading label="Sign in" />
          <SubHeading label="Enter your credentials to access your account" />

          <div className="space-y-4 mt-4">
            <InputBox
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Udaybhatnagar@gmail.com"
              label="Email"
            />
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              label="Password"
              type="password"
            />
          </div>

          <div className="pt-6">
            <Button
              onClick={async () => {
                try {
                  const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password
                  });
                  
                  if (response?.data?.token) {
                    toast.success("Signed in successfully!");
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                  } else {
                    toast.error("Invalid credentials!");
                  }
                } catch (error) {
                  toast.error("Something went wrong. Try again!");
                }
              }}
              label="Sign in"
            />
          </div>

          <div className="mt-4">
            <BottomWarning label="Don't have an account?" buttonText="Sign up" to="/signup" />
          </div>
        </div>
      </div>
    </div>
  )
}
