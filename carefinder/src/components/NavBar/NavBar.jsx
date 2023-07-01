// import css file
import "./navbar.css";
import { useState } from "react";

// import { auth } from "../../utils/firebase";
import { NavLink, Link, Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
// import Button from "../Button/Button";
// create a navbar component

const NavBar = () => {
  // const [user, loading] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>CareFinder</h1>
        </Link>
      </div>
      <ul className="nav-links">
       
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/find-hospitals">Find Hospitals</a>
        </li>

        <li className="sign-btns">
          {/* navigate to sign up page */}
          <Link to="/signin" className="btn">
            Sign In
          </Link>
        </li>
        <li className="sign-btns">
          <Link to="/signup" className="btn sign-up">
            Sign Up
          </Link>
          {/* <Button title="Sign In" /> */}
        </li>
        
       
      </ul>

      {/* navbar menu */}
      <div className="navbar__menu">
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : { color: "black" }
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Find Hospitals</a>
              </li>

              <li className="sign-btns">
                {/* navigate to sign up page */}
                <a href="/signin" className="btn">
                  Sign In
                </a>
              </li>
              <li className="sign-btns">
                <a href="/signup" className="btn sign-up">
                  Sign Up
                </a>
                {/* <Button title="Sign In" /> */}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      <Outlet />
    </nav>
  );
};

export default NavBar;
