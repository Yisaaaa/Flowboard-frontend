import React from "react";
import heroImg from "/hero.svg";
import underline from "/underline.svg";
import { Link } from "react-router-dom";
import Signup from "./Login";

const Landing = () => {
  return (
    <div className="max-w-screen-xl h-ful mx-auto">
      <main className="grid grid-cols-[1.3fr_1fr] h-full">
        <div className="">
          <h1 className="text-5xl text-heading pt-44 font-bold leading-tight mb-10">
            Tasks getting out of hand? we’ve got you covered with{" "}
            <span className="relative">
              Flowboard
              <div className="absolute -bottom-1 -left-4 w-64">
                <img className="w-full" src={underline} alt="underline" />
              </div>
            </span>
          </h1>

          <p className="text-2xl w-[80%] text-body leading-relaxed font-medium mb-28">
            Stop feeling overwhelmed by tasks. Flowboard helps you regain
            control with clear visualization and prioritization tools. 
          </p>

          <div className="flex gap-5 text-xl items-center font-semibold">
            <div
              className="bg-primary px-8 border-2 border-primary py-1 rounded-md hover:bg-white duration-150"
              href="#"
            >
              <Link to="/signup">Sign up</Link>
            </div>
            <a
              className="rounded-md px-4 border-2 py-1 border-primary hover:bg-primary duration-150"
              href="#"
            >
              Continue as Guest
            </a>
          </div>
        </div>
        <div className="pt-28">
          <img
            className="w-full"
            src={heroImg}
            alt="illustration with people in front of a kanban board"
          />
        </div>
      </main>
    </div>
  );
};

export default Landing;
