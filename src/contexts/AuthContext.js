//by Rainamira Azzahra
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import axios from 'axios';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password, userName, fullName) {
        return auth.createUserWithEmailAndPassword(email, password).then(cred => {
            const article = {
                id: cred.user.uid,
                name: fullName,
                username: userName,
                email: email,
                imgURL: "https://firebasestorage.googleapis.com/v0/b/kalm-react.appspot.com/o/profile%2Favatar.png?alt=media&token=5f7292c3-1c40-4593-a585-26dd35018151"
              }
              axios.post('/api/signup', article)
        })
    }

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
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}
