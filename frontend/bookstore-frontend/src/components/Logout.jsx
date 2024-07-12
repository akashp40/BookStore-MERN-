import React from "react";
import { useAuth } from "./context/AuthProvider";

function Logout() {
    const[authUser,setAuthUser]=useAuth()

    const handleLogout = ()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            alert("logout successfully")
            window.location.reload()
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}

export default Logout;
