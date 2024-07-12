import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)

      .then((response) => {
        console.log(response.data);
        if (response.data) alert("Signup successfull");
        localStorage.setItem("Users",JSON.stringify(response.data.user));
      })

      .catch((error) => {
        if (error.response) {
          console.log(error);
          alert("Error" + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div id="div" className="flex h-screen items-center justify-center ">
        <div className="modal-box" id="my_modal_3">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>

            <h3 className="font-bold text-lg">Signup!</h3>
            <div className="mt-5 space-y-2">
              <span>Enter Your Full Name</span>
              <br></br>
              <input
                type="fullname"
                placeholder="Enter Your Email"
                className="w-100 px-3 rounded-md outline-none border"
                {...register("fullname", { required: true })}
              />
            </div>
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
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-300">
                Signup
              </button>
              <p>
                Have account?{" "}
                <button
                  className="underline text-blue-600 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
