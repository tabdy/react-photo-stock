import React, { useState, useContext } from "react"
import { Context } from "../context/Context"

function Picture({ className, img }) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.urls.small} className="image-grid" />
            {hovered &&
                <>
                    <i className={`${img.isFavorite ? "ri-heart-fill" : "ri-heart-line"} favorite`}
                    onClick={() => toggleFavorite(img.id)}
                     ></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
            }
        </div>
    )
}

export default Picture