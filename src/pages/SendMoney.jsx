import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch user balance when component mounts
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setBalance(res.data.balance || 0);
      } catch (err) {
        console.error("Failed to fetch balance", err);
        toast.error("Could not fetch balance ❌");
      }
    };
    fetchBalance();
  }, []);

  const handleTransfer = async () => {
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount 💰");
      return;
    }

    if (amount > balance) {
      toast.error("Low Balance ⚠️ You don't have enough funds");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to: id, amount },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast.success(`₹${amount} sent to ${name} 🎉`);

      // navigate after short delay
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      toast.error("Transaction failed ❌ Please try again");
      console.error("Transfer failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="w-96 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Send Money
        </h2>

        {/* ✅ Show user balance */}
        <div className="text-center text-gray-600 text-sm">
          Available Balance: <span className="font-semibold text-green-600">₹{balance}</span>
        </div>

        <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
            {name[0].toUpperCase()}
          </div>
          <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
        </div>

        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium text-gray-600">
            Amount (₹)
          </label>
          <input
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            id="amount"
            placeholder="Enter amount"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        <button
          onClick={handleTransfer}
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white shadow-md transition-all
                      ${
                        loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:scale-[1.02]"
                      }`}
        >
          {loading ? "Processing..." : "Initiate Transfer"}
        </button>
      </div>
    </div>
  );
};
