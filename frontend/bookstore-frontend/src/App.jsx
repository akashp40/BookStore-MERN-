import "./App.css";
import Home from "./components/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./components/Courses/Courses";
import SignUp from "./components/SignUp";
import { useAuth } from "./components/context/AuthProvider";
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);


  return (
    <div>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>


    </div>
  );
};
export default App;
