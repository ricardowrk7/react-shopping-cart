import React, { Component } from "react";
import dress1 from "../images/dress1.jpg"
import dress2 from "../images/dress2.jpg"
import dress3 from "../images/dress3.jpg"
import dress4 from "../images/dress4.jpg"
import dress5 from "../images/dress5.jpg"
import dress6 from "../images/dress6.jpg"
let images={dress1:dress1,dress2:dress2,dress3:dress3, dress4:dress4,dress5:dress5,dress6:dress6}





export default class CartItems extends Component {
  render() {
    const { cartItems } = this.props;
    const itemPrice=cartItems.reduce((a,c)=>{
        return a+c.price*c.quantity
      },0)
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">cartItem is empty</div>
        ) : (
          <div className="cart cart-header">
            you have {cartItems.length} in the cart
          </div>
        )}
        <div className="cart">
            <ul className="cart-items">
                {cartItems.map(item=>(
                    <li  key={item._id}>
                        <div className="image">
                            <img src={images[item._id]}></img>
                        </div>
                      <div className="title-button">
                      <div>{item.title}</div>
                      <div className="remove-button"><div>${item.price}*{item.quantity}</div>
                      <button onClick={()=>this.props.removeHandler(item)}>remove</button></div>
                       
                      </div>

                    </li>
                ))}
            </ul>

        </div>
       {cartItems.length !==0 &&  <div className="div-price">
            <div> totalPrice: ${cartItems.reduce((a,c)=>a+c.price*c.quantity,0)}</div>
            <button>Proceed</button>
        
        
        </div>}
      </div>
    );
  }
}
