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
        /* products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 990,
                title: 'Landline Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZGxpbmUlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                price: 9989,
                title: 'Laptop',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
         ]*/
    }
    this.db = firebase.firestore();

}

componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //       console.log(snapshot);

    //       snapshot.docs.map((doc) => {
    //         console.log(doc.data());
    //       });

    //       const products = snapshot.docs.map((docs) => {
    //         const data = docs.data();

    //         data['id'] = docs.id;
    //         return data;
    //       })

    //       this.setState({
    //         products,
    //         loading: false
    //       })
    //   })

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
      qty: products[index].qty + 1
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
      if(products[index].qty === 0)
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
          qty: products[index].qty - 1
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
      count+=product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
   
    products.map((product) => {
      if(product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
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
        qty: 3,
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
          onDeleteProduct = {this.handleDeleteProduct}
        /> 
        {loading && <h1>Loading products...</h1>} 
        <div style={ { fontSize: 20, padding: 10} }>Total: {this.getCartTotal()}</div>
      </div>  
      
    );
  }
}


export default App;