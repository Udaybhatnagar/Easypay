import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ✅ Debounce helper
function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + debouncedFilter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [debouncedFilter]);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-xl text-gray-800 mb-3">Your Friends</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="🔍 Search users..."
          className="w-full px-4 py-2 border rounded-lg bg-white shadow-sm 
                     border-gray-300 focus:outline-none focus:ring-2 
                     focus:ring-indigo-500 transition-all duration-200"
        />
      </div>

      {/* Users List */}
      <div className="space-y-3">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-slate-100 to-white 
                    shadow-md hover:shadow-lg transition-all duration-300">
      
      {/* Avatar + Name */}
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-400 
                        flex items-center justify-center text-white font-bold text-lg shadow">
          {user.firstName[0]}
        </div>
        <div>
          <p className="font-medium text-gray-800">{user.firstName} {user.lastName}</p>
          <p className="text-sm text-gray-500">Active user</p>
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={() =>
          navigate(`/send?id=${user._id}&name=${user.firstName}`)
        }
        label="Send Money"
      />
    </div>
  );
}
