import React, {useContext} from "react"

import Picture from "../components/Picture"
import { Context } from "../context/Context"
import { defineClass } from "../utils/defineClass"


function Photos() {
    const contextPhotos = useContext(Context)
    const imageElements = contextPhotos.photos.map((photo, i) => (
        <Picture key={photo.id} img={photo} className={defineClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos