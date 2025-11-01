import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import {Homepagee} from "./pages/Homepagee";
import toast from "react-hot-toast";
import { Toaster } from "sonner";
dafadfdfd
function App() {
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepagee />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
