import React, { useState } from 'react'
import { ProductForm, ProductTable } from '../products'

export function ProductPage() {
    const [ products, setProducts ] = useState( [] )
    console.log( products )

    return (
        <>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductTable products={products} setProducts={setProducts} />

        </>
    )
}
