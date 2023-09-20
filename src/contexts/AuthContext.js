import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../Base'
import { GithubAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const GithubAuthProvider = new GithubAuthProvider()

    async function login() {
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
        }))
    }

    async function logout() {
        signOut(auth).then(setCurrentUser(null))
    }

    const value = { currentUser, login, logout }

    useEffect(() => {
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authChange

    }, []);

    return (
        <AuthContext.Provider value={value}>
            {/* Below, we wait for AuthContext info to populate before rendering the child components. */}
            {!loading && children}
        </AuthContext.Provider>
      )
}