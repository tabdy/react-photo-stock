import React, {useState, useContext} from "react"

import {Context} from "../context/Context"
import localeCurrency from "../utils/localeCurrency"

function CartItem(props) {
    const {item} = props
    const [isHovered, setIsHovered] = useState(false)
    const {removeFromCart} = useContext(Context)

    return (
        <div className="cart-item">
            <i 
            title="Remove this picture from your cart"
            className={isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => removeFromCart(item.id)}
            ></i>
            <img src={item.urls.small} width="130px" />
            <p>{localeCurrency(item.likes)}</p>
        </div>
    )
}

export default CartItem