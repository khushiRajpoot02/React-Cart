/*import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
      }
      this.db =firebase.firestore();
  // this.increaseQuantity= this.increaseQuantity.bind(this);
}
componentDidMount(){
  /*firebase
  .firestore()
  .collection("products")
  .get()
  .then((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
          console.log(doc.data())
    });
    const products=snapshot.docs.map((doc)=>{
      const data =doc.data();
      data['id']=doc.id;

         return data;
    })
    this.setState({
      products,
      loading:false
    })
  })*/

 /* this.db
  .collection("products")
  .onSnapshot((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
          console.log(doc.data())
    });
    const products=snapshot.docs.map((docs)=>{
      const data =docs.data();
      data['id']=docs.id;

         return data;
    })
    this.setState({
      products,
      loading:false
    })
  })
  

}
handleIncreaseQuantity = (product)=>{
    console.log("heyy plzz increase the quantity of the product",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    //products[index].Qty += 1
    //this.setState({
      //  products:products
   // })
   const docRef = this.db.collection("product").doc(products[index].id);
   docRef
   .update({
     Qty:products[index].Qty+1
   })
   .then(()=>{
     console.log("updated successfully")
   })
   .catch((error)=>{
     console.log("error:",error);
   })
}

handleDecreaseQuantity = (product)=>{
    console.log("heyy plzz decrease the quantity of the product",product);
    const {products} = this.state;
    const index = products.indexOf(product)
    if(products[index].Qty===0){
      return;
  }
   /* products[index].Qty-=1
    this.setState({
       products:products,
       
    })*/
   /* const docRef = this.db.collection("product").doc(products[index].id);
   docRef
   .update({
     Qty:products[index].Qty-1
   })
   .then(()=>{
     console.log("updated successfully")
   })
   .catch((error)=>{
     console.log("error:",error);
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
    if(product.Qty>0){
            totalCount=totalCount+product.Qty*product.price
    }
    return "";
  })
  return totalCount;
}
   addProducts = ()=>{
     this.db
     .collection("products")
     .add({
       img:"",
       title:"washing Machine",
       price:9999,
       Qty:1
     })
     .then((docR)=>{
      console.log("products has been added",docR)
     })
     .catch((error)=>{
       console.log("error",error)
     })
   }
  render(){
    const {products,loading}=this.state;
  return (
    <div className="App">
    <Navbar count={this.getCartCount()}/>
    {/*<button onClick={this.addProducts} style={{padding:10,fontSize:10}}>Add A Product</button>*///}
    /*<Cart
  
    onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity} 
     onDelete={this.handleDeleteproduct}
     products={products}
    />
    {loading && <h1>Loading Products ...</h1>}
    <div style={{fontSize:20,padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
 
  );
  }
}

export default App;*/
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component { 

  constructor() {
    super();
    this.state ={
        products: [],
        loading : true
        
    }
    this.db = firebase.firestore();

}

componentDidMount() {
    

    this.db
      .collection('products')
      // .where('price', '<=', 990 )
      // .where('title', '==', 'camera')
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((docs) => {
          const data = docs.data();

          data['id'] = docs.id;
          return data;
        })

        this.setState({
          products,
          loading: false
        })
    })
}

handleIncreaseQuantity = (product) => {
    console.log('Hey plz inc the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products: products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      Qty: products[index].Qty + 1
    })
    .then(() => {
      console.log('Updated successfully')
    })
    .catch((error) =>{
      console.log('Error : ', error);
    })
}
  handleDecreaseQuantity = (product) => {
      console.log('Dec qty of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].Qty === 0)
      {
          return;
      }
      // products[index].qty -= 1;
      // this.setState({
      //     products: products
      // })
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
        .update({
          Qty: products[index].Qty - 1
        })
        .then(() => {
          console.log('Updated successfully')
        })
        .catch((error) =>{
          console.log('Error : ', error);
        })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      // const items = products.filter((item) => item.id !== id);  //it will return a new array [{}]

      // this.setState({
      //     products : items
      // })

      const docRef = this.db.collection('products').doc(id);
      docRef
        .delete()
        .then(() => {
          console.log('Deleted successfully')
        })
        .catch((error) =>{
          console.log('Error : ', error);
        })

  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count+=product.Qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
   
    products.map((product) => {
      if(product.Qty > 0){
        cartTotal = cartTotal + product.Qty * product.price;
      }
      return '';
    });
    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        Qty: 3,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log('Product has been added',docRef);
      })
      .catch((error) => {
        console.log('Error : ',)
      })
  }

  render() {
    const {products, loading} = this.state;
    return ( 
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}} >Add a product</button> */}
        <h1 style={{margin:20}}>Cart</h1>
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteProduct}
        /> 
        {loading && <h1>Loading products...</h1>} 
        <div style={ { fontSize: 20, padding: 10} }>Total: {this.getCartTotal()}</div>
      </div>  
      
    );
  }
}


export default App;
