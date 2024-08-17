import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const ref = useRef(null);
  const location = useLocation()
  useEffect(() => {
    const nav = ref.current;

    function handleScroll() {
      if (nav.clientHeight - 40 <= window.scrollY) {
        nav.classList.replace("h-[106px]", "h-[75px]");
        nav.classList.replace("py-8", "py-4");
      } else {
        nav.classList.replace("h-[75px]", "h-[106px]");
        nav.classList.replace("py-4", "py-8");
      }
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsActiveNav(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    scrollToTop()
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  return (
    <nav
      ref={ref}
      className={`bg-primary py-8 tr fixed inset-x-0 top-0 z-40 px-12 overflow-hidden 
        ${isActiveNav ? "h-[225px]" : "h-[106px]"}
      `}
    >
      <div
        className={`container text-white flex justify-between items-center uppercase flex-wrap px-4 sm:px-0 tr `}
      >
        <Link
          to=""
          className=" text-2xl md:text-3xl font-bold"
        >
          Start Framework
        </Link>

        <button
          onClick={() => setIsActiveNav((active) => !active)}
          className="cursor-pointer text-2xl rounded-lg md:hidden"
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul
          className={`${
            isActiveNav
              ? "flex-col flex basis-full mt-6 gap-4 text-center tr"
              : "hidden items-center gap-3 md:flex tr"
          }`}
        >
          <li>
            <NavLink
              to="about"
              className="p-3 rounded-lg font-bold tr"
              onClick={() => {setIsActiveNav(false)}}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio"
              className="p-3 rounded-lg font-bold tr"
              onClick={() => setIsActiveNav(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="p-3 rounded-lg font-bold tr"
              onClick={() => setIsActiveNav(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
