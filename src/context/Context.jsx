import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])

    console.log(photos)

    useEffect(() => {
        console.log(`effect happend`)
        fetch("https://api.unsplash.com/photos?client_id=wmP6GfLvMsJrZ3J82YrMYIXx65Tym4n-rj7oKddQX-I&per_page=25&order_by=popular")
            .then(resp => resp.json())
            .then(data => setPhotos(data))
    }, [])

    console.log(photos)

    return (
        <Context.Provider value={{ photos }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }