import React from 'react'
import './TemplateRoutine.css';
import { Col, Row } from "react-bootstrap";


function RoutineCard({ image, title, list }) {
    return (
    <>
        <div className="routineCard" >
            <Row>
                <Col>
                <img src={image} alt=""/>
                </Col>
                <Col>
                    <h4 className="font-italic">{title}</h4>
                    <ul>
                        {list}
                    </ul>
                </Col>
            </Row>
        </div>
      </>
    )
}

export default RoutineCard;
