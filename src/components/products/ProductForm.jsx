import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export const ProductForm = ( { products, setProducts } ) => {
    const [ product, setProduct ] = useState( {
        name: '',
        price: '',
        freeShipping: false
    } );
    const submitHandler = ( e ) => {
        e.preventDefault();
        setProducts( [ ...products, product ] )
        setProduct( {
            name: '',
            price: '',
            freeShipping: false
        } )

    }
    const changeHandler = ( e ) => {
        if ( e.target.name == 'freeShipping' ) {
            setProduct( { ...product, [ e.target.name ]: e.target.checked } )

        } else {
            setProduct( { ...product, [ e.target.name ]: e.target.value } )
        }
    }
    return (
        <div className="container mt-5">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Product Name"
                        onChange={changeHandler}
                        name="name"
                        value={product.name}

                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>

                    <Form.Control type="number"
                        placeholder="Enter Product Price"
                        name='price'
                        onChange={changeHandler}
                        value={product.price}

                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Free Shipping"
                        name="freeShipping"
                        onChange={changeHandler}
                        checked={product.freeShipping} />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Add New Product
                </Button>
            </Form>
        </div>
    )
}

