import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import DemoUser from "../DemoUser";
import Logo from "./Logo";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <DemoUser />
      </>
    );
  }

  return (
    <div>
      <NavLink exact to="/">
        <Logo />
      </NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
