import React from 'react'

function Gallery ({images}) {
    const imageElements = image.map(img => (
         <img key={img._id} src={`/api/images/${img.filename}`} alt={img.originalname}/>
    ))
    return (
        <div>
            {imageElements}
        </div>
    )
}
export default Gallery