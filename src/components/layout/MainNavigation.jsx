import { useState } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  const hideMenu = () => {
    setShowNav(false);
  };

  return (
    <div className={classes["main-navigation"]}>
      <h2>Resources</h2>
      <div
        className={
          showNav
            ? `${classes["nav-wrapper"]} ${classes["show-nav-wrapper"]}`
            : `${classes["nav-wrapper"]}`
        }
        onClick={hideMenu}></div>
      <nav>
        <ul
          className={
            showNav ? `${classes["show-nav"]} ` : `${classes["hide-nav"]}`
          }>
          <li>Why git?</li>
          <li>Topics</li>
          <li>Learn</li>
          <li>Events</li>
        </ul>
      </nav>
      <div
        className={
          showNav
            ? `${classes["nav-wrapper"]} ${classes["show-nav-wrapper"]}`
            : `${classes["nav-wrapper"]}`
        }
        onClick={hideMenu}></div>
      <div className={classes.hamburger} onClick={() => showNavHandler()}>
        &#9776;
      </div>
    </div>
  );
};

export default MainNavigation;
