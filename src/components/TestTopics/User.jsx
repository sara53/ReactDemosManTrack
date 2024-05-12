import React, { useEffect } from 'react'

export default function User( { user, onSetLogin, count } ) {
    const logout = () => {
        onSetLogin( false )
    }

    useEffect( () => {
        console.log( "inside user" )

        return () => {
            console.log( "clean up from user" )
        }
    }, [] )

    return (
        <div className='bg-light text-dark mt-5 t p-3 rounded'>
            <div className="container">
                <h1>Welcome User  {user?.name}</h1>
                <p className='lead fs-2'>Count Data : {count} </p>
                {user && <button onClick={logout} className='btn btn-danger mt-5'>logout</button>}
            </div>
        </div>
    )
}
