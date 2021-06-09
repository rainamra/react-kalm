import React, { useContext, useState } from 'react'
import { db } from '../firebase'
import { useAuth } from "../contexts/AuthContext"

const RoutineContext = React.createContext()

export function useRoutine() {
    return useContext(RoutineContext)
}

export default function RoutineProvider({ children }) {
    const [currentRoutine, setCurrentRoutine] = useState('')
    const [currentRoutines, setCurrentRoutines] = useState([])
    const { currentUser } = useAuth();

    function selectedRoutine(routineTitle) {
        return setCurrentRoutine(routineTitle);
    }

    function getRoutineData() {
        return db.collection('users').doc(currentUser.uid).collection('Routines').doc(currentRoutine).get().then((doc) => {
            if (doc.empty) {
                console.log("not exist")
            }
            else {
                setCurrentRoutines([
                    {
                        id: doc.id
                    },
                    {
                        activity: doc.data().routine1.activity,
                        minutes:  doc.data().routine1.minutes
                    },
                    {
                        activity:  doc.data().routine2.activity,
                        minutes:  doc.data().routine2.minutes
                    },
                    {
                        activity:  doc.data().routine3.activity,
                        minutes:  doc.data().routine3.minutes
                    },
                    {
                        activity:  doc.data().routine4.activity,
                        minutes:  doc.data().routine4.minutes
                    },
                    {
                        activity: doc.data().routine5.activity,
                        minutes: doc.data().routine5.minutes
                    },
                    {
                        link: doc.data().video.link,
                        minutes: doc.data().video.minutes,
                        title: doc.data().video.title
                    },
                    {
                        totalDuration: doc.data().totalDuration
                    }
                ]);
            }
        })
    }

    function getTemplateData() {
        return db.collection('templates').doc(currentRoutine).get().then((doc) => {
            if (doc.empty) {
                console.log("not exist")
            }
            else {
                setCurrentRoutines([
                    {
                        id: doc.id
                    },
                    {
                        activity: doc.data().routine1.activity,
                        minutes:  doc.data().routine1.minutes
                    },
                    {
                        activity:  doc.data().routine2.activity,
                        minutes:  doc.data().routine2.minutes
                    },
                    {
                        activity:  doc.data().routine3.activity,
                        minutes:  doc.data().routine3.minutes
                    },
                    {
                        activity:  doc.data().routine4.activity,
                        minutes:  doc.data().routine4.minutes
                    },
                    {
                        activity: doc.data().routine5.activity,
                        minutes: doc.data().routine5.minutes
                    },
                    {
                        link: doc.data().video.link,
                        minutes: doc.data().video.minutes,
                        title: doc.data().video.title
                    },
                    {
                        totalDuration: doc.data().totalDuration
                    }
                ]);
            }
        })
    }

    const value = {
        currentRoutine,
        selectedRoutine,
        getRoutineData,
        currentRoutines,
        getTemplateData
    }

    return (
    <RoutineContext.Provider value={value}>
        {children}
    </RoutineContext.Provider>
    )
}
