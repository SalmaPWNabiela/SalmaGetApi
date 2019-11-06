import React from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'

class Product extends React.Component {
    constructor(){
        super()
        this.state = {
            product : []
        }
    }

    async componentDidMount(){
        await axios.get("http://localhost/reactapi/product.php")
        .then(response=>this.setState({
            product: response.data
        }))
        console.log(this.state)
    }

    render(){
        const renderData = this.state.product.map(product=>{
        return(
            <CardProduct product={product} key={product.product_id}/>
        )
        })
        return(
            <div class="container">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama Barang</th>
                            <th>Harga Barang</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product;