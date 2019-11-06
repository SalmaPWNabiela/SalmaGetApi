import React from 'react'

function CardProduct({product}){
    return(
        <tr>
            <td scope="row">{product.product_id}</td>
            <td scope="row">{product.product_name}</td>
            <td scope="row">{product.product_price}</td>
            <td></td>
        </tr>
    )
}

export default CardProduct