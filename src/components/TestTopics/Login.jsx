import React, { useState } from 'react'
import User from './User';

export default function Login() {
    const [ isLogin, setIsLogin ] = useState( false );
    const [ user, setUser ] = useState( null )
    const login = () => {
        setIsLogin( true )
        setUser( {
            name: "Sara",
            age: 27,

        } )
    }
    return (
        <div className='bg-dark p-5 text-light'>
            {!isLogin && <div className="container">
                <h1>Please Login First</h1>
                <button onClick={login} className='btn btn-success mt-5'> Login </button>
            </div>}
            {isLogin && <User user={user} onSetLogin={setIsLogin} />}

        </div>
    )
}
