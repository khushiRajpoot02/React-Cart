import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
        {
            price:99,
           title:" Phone",
            Qty:20,
           img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
           id:3
        },
       {
         price:99,
         title:" Watch",
          Qty:100,
        img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id:2
        },
        {
            price:999,
            title:" Laptop",
             Qty:10,
           img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
           id:1
           },
            ]
            }
  // this.increaseQuantity= this.increaseQuantity.bind(this);
}
handleIncreaseQuantity = (product)=>{
    console.log("heyy plzz increase the quantity of the product",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    products[index].Qty += 1
    this.setState({
        products:products
    })
}
handleDecreaseQuantity = (product)=>{
    console.log("heyy plzz decrease the quantity of the product",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    if(products[index].Qty===0){
        return;
    }
    products[index].Qty-=1
    this.setState({
        products:products
    })
}
handleDeleteproduct = (id)=>{
const {products} = this.state;
const items = products.filter((item)=>item.id!==id);
this.setState({
    products:items
})
}
getCartCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product) => {
    count +=product.Qty;
  });
  return count;
}
getCartTotal=()=>{
  const {products} = this.state;
  let totalCount=0;
  products.map((product)=>{
totalCount=totalCount+product.Qty*product.price
  })
  return totalCount;
}
  render(){
    const {products}=this.state;
  return (
    <div className="App">
    <Navbar count={this.getCartCount()}/>
    <Cart
    products={products}
    onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity} 
     onDelete={this.handleDeleteproduct}
    />
    <div style={{fontSize:20,padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
