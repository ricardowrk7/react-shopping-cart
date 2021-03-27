import data from "./data.json";
import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortproducts=(e)=>{
    
   const sort=e.target.value
   this.setState(state=>({
     sort:sort,
     products:this.state.products.slice().sort((a,b)=>(
       sort==="lowest"?
      ((a.price<b.price)? -1:1):
      sort==="highest"? ((a.price<b.price)? +1:-1):((a._id<b._id)? -1:1)
       
     ))
   }))
  
   
  }
  filterproducts=(e)=>{
    // console.log(e.target.value)
    if(e.target.value===""){
      this.setState({
        products:data.products,
        size:e.target.value
      })
    }else{
      this.setState({
        size:e.target.value,
        products:data.products.filter(x=>x.availableSizes.indexOf(e.target.value) >= 0)
      })

    }
   

  }
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar"> cart items</div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
