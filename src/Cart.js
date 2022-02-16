import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    /*constructor() {
        super();
        this.state ={
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 990,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 9989,
                    title: 'Laptop',
                    qty: 5,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        console.log('Hey plz inc the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products
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
        products[index].qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id);  //it will return a new array [{}]

        this.setState({
            products : items
        })
    }*/
    const {products} = props;
    return(
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem 
                        product={product}
                        key={product.id}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                        /* func={() =>console.log('sbsd')}
                        isloggedin = {false}
                        jsx={<h1>Test</h1>}
                        comp={<CartItem/>}*/
                    />
                )
            })}
        </div>
    );
    
}

export default Cart;