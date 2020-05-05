import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.first}`}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a href="/news">News</a>
            </div>
            <div className={classes.item}>
                <a href="/music">Music</a>
            </div>
            <div className={`${classes.item} ${classes.last}`}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;