import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])


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

    return (
        <Context.Provider value={{ photos, toggleFavorite }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }