import React from 'react'
import { ProductItem } from './productItem'
import { booksList } from '../../models/booksList'
export function Products() {

    return (
        <div className='p-5'>
            <h1 className='text-center mb-5 text-muted'>Our Products</h1>
            <div className="container">
                <button className='btn btn-dark mb-3'>Clear All</button>
                <div className="row">
                    {booksList.map( ( book ) => {
                        return ( <React.Fragment key={book.id}>
                            <ProductItem book={book} />
                        </React.Fragment> );
                    } )}
                </div>
            </div>

        </div>
    )
}
