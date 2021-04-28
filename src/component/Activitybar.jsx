import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import './Activitybar.css';
import ActivitybarRow from "./ActivitybarRow";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Activitybar() {
    return (
        <div className="activitybar">
            <ActivitybarRow Icon={AccountCircleIcon} name="Rainamira Azzahra"/>
            <ActivitybarRow Icon={AccountCircleIcon} name="Rayhan Ali"/>
            <ActivitybarRow Icon={AccountCircleIcon} name="Radisa Hussein"/>
        </div>
    );
}

export default Activitybar;