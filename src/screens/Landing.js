import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import LoginButton from '../components/header/LoginButton'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/header/Profile'

const Landing = () => {
    const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <header>
                <h2>Welcome to livs coffee</h2>
                <div>Become a member today!</div>
                    <LoginButton />
                    <LogoutButton />
                    <Profile /> 
                <p> gain access to all kinds of rewards by signing up now!</p>
            </header>
            
        </div>
    )
}

export default Landing
