import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [routineCards, setRoutineCards] = useState([]);

    function signup(email, password, userName, fullName) {
        return auth.createUserWithEmailAndPassword(email, password).then(cred => {
            db.collection('users').doc(cred.user.uid).set({
                name: fullName,
                username: userName,
                email: email,
            });
        })
    }

    // function getTitle() {
    //     db.collection('users').doc(currentUser.uid).getCollection().then(collection => (
    //       setRoutineCards(collection.id)
    //   ))
    //   return routineCards;
    // }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(email, password) {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        updatePassword,
        resetPassword,
        updateEmail,
        // getTitle
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}
