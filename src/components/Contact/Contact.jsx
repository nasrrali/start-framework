import React, { useEffect } from "react";
import Star from "../Star/Star";

export default function Contact() {
  
useEffect(() => {
  document.title = "Contact";
}, []);
  return (
    <>
      <section className="contact">
        <div className="container pt-10">
          <div className="title text-center">
            <h2 className="font-bold text-4xl">CONATCT SECTION</h2>
            <Star color="text-primary" bg="bg-primary" />
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <div className="max-w-2xl mx-auto">
                <form>
                  <div className="relative z-0 mb-9 w-full group">
                    <input
                      type="text"
                      name="floating_name"
                      className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="absolute text-xl text-green duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 "
                    >
                      userName :
                    </label>
                  </div>
                  <div className="relative z-0 mb-9 w-full group">
                    <input
                      type="number"
                      name="floating_age"
                      className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_age"
                      className="absolute text-xl text-green  duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 "
                    >
                      userAge :
                    </label>
                  </div>
                  <div className="relative z-0 mb-9 w-full group">
                    <input
                      type="email"
                      name="floating_email"
                      className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-xl text-green  duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 "
                    >
                      userEmail :
                    </label>
                  </div>
                  <div className="relative z-0 mb-9 w-full group">
                    <input
                      type="password"
                      name="floating_password"
                      className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_password"
                      className="absolute text-xl text-green  duration-300 transform -translate-y-10  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 "
                    >
                      userPassword :
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-greenHover hover:bg-green tr font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 text-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
