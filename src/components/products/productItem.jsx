import React from 'react'
import { Button } from 'react-bootstrap'

export function ProductItem( { book } ) {
    const { title, description } = book
    return (
        <div className="col-sm-4 col-md-3">
            <div className="card mb-3">
                <img src="./1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"> {description} text to build on the card title and make up the bulk of the card's content.</p>
                    <Button variant='outline-success m-2'>Read Book</Button>
                    <Button variant='outline-danger'>Delete Book</Button>
                </div>
            </div>
        </div>
    )
}
