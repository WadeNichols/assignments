import React from 'react'

function ServiceDetail({ id, price, description, name }) {
    return (
        <div>
            <h2>Product Name: {name}</h2>
            <p>Product ID: {id}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default ServiceDetail;
