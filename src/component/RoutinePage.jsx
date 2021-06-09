import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTimer } from 'react-timer-hook';
import "./RoutinePage.css";
import BackgroundVideo from './BackgroundVideo';
import { useRoutine } from "../contexts/RoutineContext";
import { useHistory } from "react-router-dom";
import LoadSpinner from './LoadSpinner';

export default function RoutinePage() {

    const [isStarting, setStarting] = useState(false);
    const [activeActivity, setActiveActivity] = useState(1);
    const [activeTitle, setActiveTitle] = useState('');
    const [nextTitle, setNextTitle] = useState('');
    const [activeDuration, setActiveDuration] = useState(0);
    const { getRoutineData, currentRoutines } = useRoutine();
    const [isLoaded, setIsLoaded] = useState(false);

    const history = useHistory();

    const { selectedRoutine } = useRoutine();

    function MyTimer ({ expiryTimestamp }) {

        const {
            seconds,
            minutes,
            isRunning,
            start,
            pause,
            resume,
          } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

        const renderButton = () => {
            if (minutes === 0 && seconds === 0)
            {
                return <Button className="rounded-pill" onClick={nextRoutineHandler}>{activeActivity === 1 ? 'Ready' : 'Next Routine'}</Button>;
            } else if (isRunning === true) {
                return  <Button className="rounded-pill" onClick={pause}>Pause</Button> ;
            } else if (isRunning === false) {
                return  <Button className="rounded-pill" onClick={resume}>Resume</Button> ;
            } else if (isStarting === false) {
                return <Button className="rounded-pill" onClick={start}>Start</Button>
            }
        }

        return (
            <>
                <div className="routine">
                <h1>{activeActivity === 1 ? 'Are you ready?' : `${activeTitle}`}</h1>
                <h5 className="font-italic font-weight-light">{activeActivity === 1 ? 'Click ready to start your routine' : 'Enjoy your time!'}</h5>
                <div className="timer-wrapper">
                    <div className="time">
                        <h3>{minutes > 9 ? minutes : '0'+minutes}</h3>
                        <p>Minutes</p>
                    </div>
                    <span>:</span>
                    <div className="time">
                        <h3>{seconds > 9 ? seconds : '0'+seconds}</h3>
                        <p>Seconds</p>
                    </div>
                </div>
                {renderButton()}
                <p className="font-weight-light"> {activeActivity === 1 ? '': `Next activity:  ${nextTitle}`}</p>
                </div>
            </>
        )
    }

    useEffect(() => {
        let mounted = true

        if (mounted) {
            setTimeout(() => {
                startRoutine()
                .then(() =>
                setIsLoaded(true)
                )
            }, 1000)}

        return () => {
            mounted = false
          }

    }, [])

    async function startRoutine() {
        try {
        getRoutineData();
        } catch (e) {
            console.log('you have no access');
            history.push('/');
        }
    }

    function nextRoutineHandler() {
        if (activeActivity < currentRoutines.length-2) {
            setStarting(false);
            setActiveActivity(activeActivity+1)

            setActiveTitle(currentRoutines[activeActivity].activity);
            setActiveDuration(currentRoutines[activeActivity].minutes);
            setNextTitle(currentRoutines[activeActivity+1].activity)
        }
        else {
            selectedRoutine(currentRoutines[0].id);
            history.push("/last-routine")
        }
    }

    const time = new Date();
    time.setMinutes(time.getMinutes() +Number(activeDuration));
    return (
      <>
      {isLoaded === true ?
      <BackgroundVideo
       blur={1}
       videoSource="https://firebasestorage.googleapis.com/v0/b/kalm-react.appspot.com/o/video%2FbackgroundVideo.mp4?alt=media&token=33018cd9-0137-4524-a1e6-08c7d1a0e79d">
          <MyTimer expiryTimestamp={time} />
      </BackgroundVideo> : <LoadSpinner/>}
      </>
    );


}
