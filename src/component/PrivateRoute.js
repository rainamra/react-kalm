import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
export default function PrivateRoute({ children, ...rest }
    ) {
        const { currentUser } = useAuth()

    return (
        <Route
        {...rest}
        render={({ location }) => {
            return currentUser ? (children) : <Redirect to="/login"></Redirect>
        }} >

        </Route>
    )
}
