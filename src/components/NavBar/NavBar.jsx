import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props) => {

    let friends = props.sidebar.profiles.map(friend => {
        if (friend.id > 9){
            return false;
        }
        return <Friends image={friend.image}/>
    });

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={`${classes.item} ${classes.settings}`}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={`${classes.item} ${classes.friends}`}>
                <hr/>
                <NavLink to="/friends" activeClassName={classes.activeLink}>Friends</NavLink>
                <div className={classes.friendItem}>{friends}</div>
            </div>
        </nav>
    );
}

export default NavBar;