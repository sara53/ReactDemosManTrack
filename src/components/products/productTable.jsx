import React from 'react'
import { Table } from 'react-bootstrap'

export function ProductTable( { products, setProducts } ) {

    const removeProduct = ( productObj ) => {
        const filtered = products.filter( product => product.name != productObj.name )
        setProducts( [ ...filtered ] )

    }
    return (
        <div className='bg-light p-5 mt-5 text-center'>
            <div className="container">
                <h1>Products List</h1>
                <Table className='mt-5' striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map( ( product, index ) => {
                            return (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => removeProduct( product )} className='btn btn-outline-danger'>Remove</button>
                                    </td>
                                </tr>

                            )
                        } )}
                    </tbody>
                </Table>

            </div>
        </div>
    )
}
