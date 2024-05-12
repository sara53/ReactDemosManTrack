import React, { useState } from 'react'

export function Test( { onTestFun } ) {
    const [ compTitle, setComponentTitle ] = useState( "test Component" )


    const clickHandler = () => {
        onTestFun()
        console.log( "dd" )
    }
    const changeHandler = ( e ) => {
        setComponentTitle(
            e.target.value

        )


    }
    return (
        <div className='bg-dark text-light text-center p-5'>
            {console.log( "Render Method" )}
            <h1>{compTitle}</h1>
            <div className="container">
                <input type="text" className='form-control'
                    name="username"
                    placeholder='Enter Your Data'
                    onChange={changeHandler}
                />
                {compTitle}
                <button className='btn btn-success m-2' onClick={clickHandler}>Fire Event</button>
            </div>
        </div>
    )
}
