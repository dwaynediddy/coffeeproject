import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    return (
        isAuthenticated && (
            // user information to be displayed
            <div className="profile">
                {/* <img src={user.picture} alt={user.name} className="profilePic"/> */}
                <h2>Welcome back {user.name.split('@', 1)}</h2>
                {/* <p>{user.email}</p> */}
                {/* this shows the JSON of user details */}
                {/* <JSONPretty data={user} /> */}
                {/* { JSON.stringify(user, null, 2) } */}
            </div>
        )
    )
}

export default Profile
