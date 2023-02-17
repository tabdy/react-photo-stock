import React, {useContext, useState} from "react"

import {Context} from "../context/Context"
import CartItem from "../components/CartItem"
import localeCurrency from "../utils/localeCurrency"

function Cart() {
    const [isOrdering, setIsOrdering] = useState(false)
    const {cartItems, clearCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })
    // Act like the number of likes is the price of a photo
    const totalPrice = cartItems.reduce((total, price) => total + price.likes, 0)

    function placeOrder() {
        setIsOrdering(true)
        setTimeout(() => {
            setIsOrdering(false)
            clearCart()
            console.log('order placed')
        }, 2500)
    }

    return (
        <main className="cart-page">
            <h1>Cart</h1>
            {cartItemElements}
            <p className="total-cost">Total Price: {localeCurrency(totalPrice)}</p>
            {cartItems.length ?           
            <div className="order-button">
                <button onClick={placeOrder}>{isOrdering ? "Ordering..." : "Place Order"}</button>
            </div>
            :
            <h2>Your cart is empty.</h2>
            }
        </main>
    )
}

export default Cart