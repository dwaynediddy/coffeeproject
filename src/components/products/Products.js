import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product'

import Bamboo from '../../images/bamboo.png'
import Drip from '../../images/drip.png'


const products = [
    { id: 1, name: 'coffee drip', description: 'coffee drip', price: '$19.95', image: Bamboo},
    { id: 2, name: 'bamboo mugs', description: 'cool mug', price: '$19.95', image: Drip},
]
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products