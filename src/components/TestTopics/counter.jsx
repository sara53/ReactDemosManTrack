import React, { useState } from 'react'

export default function Counter() {
    let [ count, setCount ] = useState( 0 )
    return (
        <div className='bg-dark p-5 text-light text-center '>
            <div className="container">
                <h1 className='text-warning'>Counter Component</h1>
                <p className='lead fs-2'> count : {count}</p>
                <div className='d-flex justify-content-around'>
                    <button onClick={() => setCount( count + 1 )} className='btn btn-success'>+</button>
                    <button onClick={() => setCount( count - 1 )} className='btn btn-danger'>-</button>
                </div>
            </div>
        </div>
    )
}
