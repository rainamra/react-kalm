import React from 'react'
import './TemplateRoutine.css';


function RoutineCard({ image, title }) {
    return (
    <>
        <div className="routineCard" >
            <img src={image} alt=""/>
            <div className="routineCard_info">
                <h4>{title}</h4>
            </div>
        </div>
      </>
    )
}

export default RoutineCard;
