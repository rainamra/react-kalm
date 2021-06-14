import React, { useContext, useState } from 'react'
import { db } from '../firebase'
import { useAuth } from "../contexts/AuthContext"
import axios from 'axios';

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
        return axios.get(`api/user/${currentUser.uid}/routine/${currentRoutine}`)
        .then(res => {
            setCurrentRoutines(res.data);
            console.log(currentRoutines);
        })
    }

    function getTemplateData() {
        return axios.get(`/api/template-routine/${currentRoutine}`)
        .then(res => {
            setCurrentRoutines(res.data);
            console.log(currentRoutines);
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
