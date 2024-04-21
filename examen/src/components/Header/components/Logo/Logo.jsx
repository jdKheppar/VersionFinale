import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div>
      <NavLink to="/">
        <img
          className={"headerLogo"}
          height={100}
          width={200}
          src={logo}
          alt="Atelier Materi - Haute parfumerie française"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
