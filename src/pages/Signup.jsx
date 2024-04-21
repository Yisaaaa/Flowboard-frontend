import React, { useState } from "react";
import SignupImage from "/signup.svg";
import Underline from "/underline.svg";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-[1fr_40%] items-center justify-center h-full ">
      <div className="flex justify-center">
        <img
          className="w-[60%]"
          src={SignupImage}
          alt="illustration of a girl seating in a window beside a tree"
        />
      </div>
      <div className="flex items-center justify-center bg-bg-primary h-full">
        <div className="bg-white w-[70%] h-[75%] rounded-lg flex flex-col items-center">
          <p className="text-3xl font-semibold text-center mt-16 mb-12">
            Create an account
          </p>
          <form className="flex flex-col gap-7 w-[70%]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="font-medium text-base text-gray-500"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="px-2 py-2 text-lg border-2 border-gray-200 focus-visible:border-primary focus-visible:outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-medium text-base text-gray-500"
              >
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                className="px-2 py-2 text-lg border-2 border-gray-200  focus-visible:border-primary focus-visible:outline-none rounded"
              />
              <div className="flex self-end items-center gap-2">
                <input
                  id="showPassword"
                  className=""
                  type="checkbox"
                  value={passwordShown}
                  onChange={togglePassword}
                />
                <label htmlFor="showPassword">Show password</label>
              </div>
            </div>

            <button
              className="rounded-md bg-primary hover:bg-[#FFEC82] transition-all duration-100 text-xl text-heading font-semibold py-2 mt-12"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <p className="mt-12 font-medium text-lg text-gray-500">
            Not a new user?{" "}
            <a href="#" className="relative overflow-visible hover:text-black">
              Login{" "}
              <div className="absolute -bottom-1 -left-2 w-16">
                <img className=" w-full" src={Underline} alt="underline" />
              </div>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
