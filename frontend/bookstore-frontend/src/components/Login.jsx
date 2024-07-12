import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
function Login() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
   // console.log(data);
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/user/login", userInfo)

      .then((response) => {
        //console.log(response.data);
        if (response.data) 
          alert("login successfull");
        document.getElementById("my_modal_3").close()
        window.location.reload()
        //console.log(response.data.user)
        localStorage.setItem("Users",JSON.stringify(response.data.user));
      })

      .catch((error) => {
        if (error.response) {
          console.log(error);
          alert("Error  " + error.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-5 space-y-2">
              <span>Email</span>
              <br></br>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-100 px-3 rounded-md outline-none border"
                {...register("email", { required: true })}
              />
            </div>
            {/* password */}
            <div className="mt-5 space-y-2">
              <span>Password</span>
              <br></br>
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-100 px-3 rounded-md outline-none border"
                {...register("password", { required: true })}
              />
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-300 ">
                Login
              </button>
              <p>
                Not Regiestred?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-600 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
