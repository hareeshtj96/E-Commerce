import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import "./Header.css";

const Header = ({ cartCount }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimation(false);

      const _ = document.querySelector(".cart-icon").offsetHeight;
      setAnimation(true);

      const timer = setTimeout(() => {
        setAnimation(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>LUXORA</h1>
          </div>

          <nav className="navigation-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#" className={`cart-icon ${animation ? "shake" : ""}`}>
                  <IoCartOutline size={24} />
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </a>
              </li>
              <li className="profile-menu">
                <a href="#">
                  <FaRegUser size={20} />
                </a>
                <div className="dropdown">
                  <p className="login-signup">LOGIN/SIGNUP</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
