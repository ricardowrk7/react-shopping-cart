import React, { Component } from 'react'
import dress1 from "../images/dress1.jpg"
import dress2 from "../images/dress2.jpg"
import dress3 from "../images/dress3.jpg"
import dress4 from "../images/dress4.jpg"
import dress5 from "../images/dress5.jpg"
import dress6 from "../images/dress6.jpg"
let images={dress1:dress1,dress2:dress2,dress3:dress3, dress4:dress4,dress5:dress5,dress6:dress6}

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product=>(
                        <li key={product._id}>
                            <div className="product">
                                <a href="#">
                                <img src={images[product.image]} />
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{product.price}</div>
                                    <button onClick={()=>this.props.addToCart(product)} className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul>
                
            </div>
        )
    }
}
