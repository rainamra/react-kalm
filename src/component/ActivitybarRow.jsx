import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import './ActivitybarRow.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


function ActivitybarRow({ Icon, name, status }) {
    return (
        <div className="activitybarRow">
            <Col sm={4} md={4}>
                <Icon className="activitybarRow_avatar"/>
            </Col>
            <Col sm={8} md={8}>
                <Row>
                    <h6 className="activitybarRow_title">{name}</h6>
                </Row>
                <Row className="status">
                    <PlayArrowIcon />
                    <p className="activitybarRow_status">{status}</p>
                </Row>
            </Col>
        </div>
    );
}

export default ActivitybarRow;