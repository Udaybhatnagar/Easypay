import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("https://easypay-backend-8bw4.onrender.com/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      });

      if (response.data.success) {
        toast.success(response.data.message || "Signup successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }

    } catch (error) {
      const errorMsg = error.response?.data?.message || "Signup failed!";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="rounded-lg bg-white w-96 text-center p-6 shadow-lg">
        <Heading label="Sign up" />
        <SubHeading label="Enter your information to create an account" />

        <div className="space-y-4 mt-4">
          <InputBox
            onChange={e => setFirstName(e.target.value)}
            placeholder="John"
            label="First Name"
          />
          <InputBox
            onChange={e => setLastName(e.target.value)}
            placeholder="Doe"
            label="Last Name"
          />
          <InputBox
            onChange={e => setUsername(e.target.value)}
            placeholder="udaybhatnagar@gmail.com"
            label="Email"
          />
          <InputBox
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••"
            label="Password"
            type="password"
          />
        </div>

        <div className="pt-6">
          <Button onClick={handleSignup} label="Sign up" />
        </div>

        <BottomWarning
          label="Already have an account?"
          buttonText="Sign in"
          to="/signin"
        />
      </div>
    </div>
  );
};
