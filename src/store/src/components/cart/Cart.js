import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length 
    const classes = useStyles()


    const EmptyCart = () => {
    // if cart is empty this will be shown
        <Typography variant='subtitle1'>There is nothing in your cart!</Typography>
}

const FilledCart = () => {
    //show items in cart, add prices of items and give a total
    <>
        <Grid container spacing={3}>
            {/* maps through items and and shows one item at a time for what items are in the line item  */}
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size='lagre' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                <Button className={classes.checkoutButton} size='lagre' type='button' variant='contained' color='primary'>Checkout</Button>
            </div>
        </div>
    </>
}

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
