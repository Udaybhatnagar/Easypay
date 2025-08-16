import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/"); 
  };

  return (
    <div className="sticky top-0 z-50 h-16 px-6 flex items-center justify-between 
                    backdrop-blur-md bg-white/70 shadow-md border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="font-semibold text-2xl tracking-tight">
          Easy <span className="font-bold text-indigo-600">Pay</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Hello 👋</span>

        {/* Avatar */}
        <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 
                        flex items-center justify-center text-white font-bold shadow-lg cursor-pointer 
                        hover:scale-105 transition-transform">
          U
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium
                     hover:bg-red-600 transition-colors shadow-md"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </div>
  );
};
