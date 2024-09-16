import React, { useEffect, useState } from "react";
// import logo from "../../assets/logo.svg";
import "./header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".item")) {
        setOpenItemIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const handleCloseNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="header">
      <nav className="nav">
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
