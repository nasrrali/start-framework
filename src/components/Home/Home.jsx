import React, { useEffect } from "react";
import avatar from "./../../assets/avatars.png";
import Star from "../Star/Star";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="home bg-green text-center m-auto text-white h-screen center">
        <div className="container">
          <div className="logo w-64 text-center m-auto">
            <img src={avatar} alt="" />
          </div>
          <h2 className="text-4xl font-bold mt-7 ">START FRAMEWORK</h2>
          <Star color="text-white" bg="bg-white" />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
