import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import dress1 from "../images/dress1.jpg";
import dress2 from "../images/dress2.jpg";
import dress3 from "../images/dress3.jpg";
import dress4 from "../images/dress4.jpg";
import dress5 from "../images/dress5.jpg";
import dress6 from "../images/dress6.jpg";
let images = {
  dress1: dress1,
  dress2: dress2,
  dress3: dress3,
  dress4: dress4,
  dress5: dress5,
  dress6: dress6,
};

export default class Products extends Component {
  constructor(props) {
    super();
    this.state = { product: null };
  }

  openModal = (product) => {
    this.setState({ product: product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a onClick={() => this.openModal(product)} href="#">
                    <img src={images[product.image]} alt="image" />
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{product.price}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              
              <button onClick={this.closeModal} className="remove-modal">remove</button>
              <div className="product-detailes">
                <img className="modal-image" src={images[product.image]} alt="image" />
                <div className="product-discriptopn">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>
                    availableSizes:{" "}
                    {product.availableSizes.map((x) => (
                      <span>{" "}<button>{x}</button></span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>{product.price}</div>
                    <button
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                  
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
