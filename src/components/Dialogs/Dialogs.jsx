import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogMenu}>
            <div className={classes.dialogs}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Leonid</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Valeriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Artemiy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Anastasia</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">George</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Allen</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How r u?</div>
                <div className={classes.message}>I am waiting for you</div>
                <div className={classes.message}>See you soon</div>
                <div className={classes.message}>Have a nice day!</div>
                <div className={classes.message}>lmao</div>
            </div>
        </div>
    );
}

export default Dialogs