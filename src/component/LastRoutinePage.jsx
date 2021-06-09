import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./RoutinePage.css";
import { useAuth } from "../contexts/AuthContext";
import { useRoutine } from "../contexts/RoutineContext";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

function LastRoutinePage() {

    const [videoTitle, setVideoTitle] = useState('');
    const [videoLink, setVideoLink] = useState('');

    const history = useHistory()
    const { currentRoutine } = useRoutine();
    const { currentUser } = useAuth();

    useEffect(() => {

        showVideo();

    }, [])

    function VideoPlayer() {

        return(
            <>
            <div style={{background:"linear-gradient(90deg, #09203F 0%, #537895 100%", height:"980px", letterSpacing:"2px"}}>
            <div className="text-center pt-5" >
            <h2 className="font-italic" style={{color: "white"}} >{videoTitle}</h2>
            </div>
            <ReactPlayer className="video-player mt-3"
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onPlay={() => console.log('onPlay callback')}
                onEnded={() => {
                    console.log('onEnded callback');
                    history.push('/');
            }}
                width='70%'
                height='70%'
                playsinline
                url={videoLink}>
            </ReactPlayer>
            </div>
            </>
        )
    }

    async function showVideo() {
        try{
            const activityRef = db.collection('users').doc(currentUser.uid).collection('Routines').doc(currentRoutine);
            activityRef.get().then((doc) => {
                if (doc.empty) {
                    console.log("not exist")
                }
                else {
                    console.log("Document data:", doc.data());
                    setVideoLink(doc.data().video.link);
                    setVideoTitle(doc.data().video.title);
                    console.log(videoLink);
                    console.log(videoTitle);
                }
            })
        } catch (e) {
            console.log('you have no access');
            history.push('/');
        }
    }

    return (
        <>
         {videoTitle ? <VideoPlayer /> : null}
        </>
    )
}

export default LastRoutinePage
