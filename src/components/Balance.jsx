import { Wallet } from "lucide-react";

export const Balance = ({ value }) => {
  return (
    <div className="p-5 w-[30%] rounded-2xl bg-gradient-to-tr from-indigo-900 to-blue-700 
                    shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
      
      {/* Header */}
      <div className="flex items-center space-x-2 text-white/90">
        <Wallet className="w-6 h-6 text-white" />
        <span className="font-semibold text-lg">Your Balance</span>
      </div>

      {/* Balance Value */}
      <div className="mt-4 font-bold text-2xl text-green-400 tracking-wide">
        ₹ {value}
      </div>
    </div>
  );
};
