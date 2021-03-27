import data from "./data.json";
import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import CartItems from "./components/CartItems";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      cartItems:[],
      sort: "",
    };
  }
  createOrder=(order)=>{
    console.log(order.name)
  }

  addToCart=(product)=>{
    const updatedCartItem = [...this.state.cartItems];
    const existedItem = updatedCartItem.find((x) => x._id === product._id);
    if (existedItem) {
      existedItem.quantity = existedItem.quantity + 1;
      // setCartItem(updstedCartItem);
      this.setState({cartItems:updatedCartItem})
      // updatedCartItem.push()
    } else {
      product.quantity = 1;
      // setCartItem([...cartItem, product]);
     updatedCartItem.push(product)
     this.setState({cartItems:updatedCartItem})
    }
    // console.log(product)
    console.log(this.state.cartItems)
    

  }

  removeHandler=(item)=>{
   const newCartItems=[...this.state.cartItems]
     const filteredCartItem=newCartItems.filter(x=>x !== item)
    this.setState({cartItems:filteredCartItem})


  }
  sortproducts = (e) => {
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? -1
              : 1
            : sort === "highest"
            ? a.price < b.price
              ? +1
              : -1
            : a._id < b._id
            ? -1
            : 1
        ),
    }));
  };
  filterproducts = (e) => {
    // console.log(e.target.value)
    if (e.target.value === "") {
      this.setState({
        products: data.products,
        size: e.target.value,
      });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (x) => x.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterproducts={this.filterproducts}
                sortproducts={this.sortproducts}
              />
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
               
              />
            </div>
            <div className="sidebar"> <CartItems createOrder={this.createOrder} removeHandler={this.removeHandler} cartItems={this.state.cartItems}/></div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
