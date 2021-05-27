import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useTimer } from 'react-timer-hook';
import "./RoutinePage.css";


function MyTimer ({ expiryTimestamp }) {

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const [isStarting, setStarting] = useState(false);


    const renderButton = () => {
        if (minutes === 0 && seconds === 0)
        {
            return <Button>Next Routine</Button>;
        } else if (isRunning === true) {
            return  <Button onClick={pause}>Pause</Button> ;
        } else if (isRunning === false) {
            return  <Button onClick={resume}>Resume</Button> ;
        } else if (isStarting === false) {
            return <Button onClick={start}>Start</Button>
        }
    }

    return (
        <>
            <div className="routine">
            <h2>Take a Bath</h2>
            <p>Enjoy your time!</p>
            <div className="timer-wrapper">
                <div className="time">
                    <h4>{minutes > 9 ? minutes : '0'+minutes}</h4>
                    <p>Minutes</p>
                </div>
                <span>:</span>
                <div className="time">
                    <h4>{seconds > 9 ? seconds : '0'+seconds}</h4>
                    <p>Seconds</p>
                </div>
            </div>
            {renderButton()}
            <p>Next step is Skincare</p>
            </div>
        </>
    )
}

export default function RoutinePage() {

    const time = new Date();
    time.setMinutes(time.getMinutes() + 1); // 10 minutes timer
    return (
      <>
        <MyTimer expiryTimestamp={time} />
      </>
    );


}
