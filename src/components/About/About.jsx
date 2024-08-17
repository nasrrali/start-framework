import React, { useEffect } from "react";
import Star from "../Star/Star";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <section className="about bg-green h-screen center text-white">
        <div className="container">
          <div className="title text-center ">
            <h2 className="font-bold text-4xl">ABOUT COMPONENT</h2>
            <Star color="text-white" bg="bg-white" />
          </div>
          <div className="center px-32 flex-col md:flex-row  gap-5 mt-5 ">
            <div className="">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
