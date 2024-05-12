import React, { Children, useEffect, useState } from 'react'
import User from './User';

export default function UseEffectComp() {
    const [ show, setShow ] = useState( false );
    const [ count, setCount ] = useState( 0 )
    const [ welcome, setWelcome ] = useState( `Welcome ${count}` )
    const login = () => {
        setShow( !show )
    }

    useEffect( () => {

        console.log( "first from useEffect" )

    }, [ count ] )
    return (
        <div className='bg-dark p-5 text-light'>
            {console.log( "Render" )}
            <h1>Count : {count}</h1>
            <h2>ITI : {welcome}</h2>
            <button onClick={login} className='btn btn-success mt-5'> Toggle User Component </button>

            <button onClick={() => { setCount( count + 1 ); }} className='btn btn-primary d-block m-5'>+</button>
            {show && <User count={count} />}

        </div>
    )
}
