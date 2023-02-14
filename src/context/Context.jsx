import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        console.log(`effect happend`)
        fetch("https://api.unsplash.com/photos?client_id=wmP6GfLvMsJrZ3J82YrMYIXx65Tym4n-rj7oKddQX-I&per_page=25&order_by=popular")
            .then(resp => resp.json())
            .then(data => setPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const changedArr = photos.map(photo => {
            if (photo.id === id) {
                // isFavorite doesn't exist, so "!undefined" will return "true"
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })

        setPhotos(changedArr)       
    }

    function addToCart(photoItem) {
        setCartItems(prevState => {
            return prevState.find(item => item.id === photoItem.id ) ?
             prevState : [...prevState, photoItem]
        })
    }

    function removeFromCart(id) {
        setCartItems(prevState => [...prevState].filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{ photos, toggleFavorite, cartItems, addToCart, removeFromCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }