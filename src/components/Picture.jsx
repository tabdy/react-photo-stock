import React from "react"

function Picture({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.urls.small} className="image-grid"/>
        </div>
    )
}

export default Picture