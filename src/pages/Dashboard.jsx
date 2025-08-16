import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios";


export const Dashboard = () => {
    const [balcae,setbalance]=useState(0);
      axios.get("http://localhost:3000/api/v1/account/balance",{

       headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
       }
    })
 
     .then(response => {
        setbalance(response.data.balance)
     })
                    
    return <div>
        <Appbar />
        <div className="m-8 h-50 w-">
            <Balance value={balcae} />
            <Users />
        </div>
    </div>
}