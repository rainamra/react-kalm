import React, { useState } from "react";
import './ActivitybarRow.css';

function ActivitybarRow({ Icon, name }) {
    return (
        <div className="activitybarRow">
            <Icon className="activitybarRow_icon"/>
            <h6 className="activitybarRow_title">{name}</h6>
        </div>
    );
}

export default ActivitybarRow;