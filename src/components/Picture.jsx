import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../context/Context"

function Picture(props) {
    const { className, img } = props
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i
                className="ri-heart-fill favorite"
                onClick={() => toggleFavorite(img.id)}
            ></i>
        } else if (hovered) {
            return <i
                className="ri-heart-line favorite"
                onClick={() => toggleFavorite(img.id)}
            ></i>
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id)

        if (isInCart) {
            return <i className="ri-shopping-cart-fill cart"
                onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart"
                onClick={() => addToCart(img)}></i>
        }
    }


    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.urls.small} className="image-grid" />
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Picture.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        urls: PropTypes.objectOf(PropTypes.string).isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Picture