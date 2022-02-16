import React from 'react';
import minus from './Images/minus.png';
import remove from './Images/delete.png';
import plus from './Images/plus.png';

const CartItem = (props) => {
    /*constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this)
        this.testing();
    }*/
    /*testing () {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            this.setState({ qty: this.state.qty + 10});
            this.setState({ qty: this.state.qty + 10});
            this.setState({ qty: this.state.qty + 10});
            console.log('state', this.state);
        });
    }*/

    /*increaseQuantity = () => {
        //console.log('this', this.state);
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //setState form 2 - if prevState req use this
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        });
    }*/

    // console.log('this.props', this.props);
    const {price, title, qty} = props.product;
    const {
        product,
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={ { fontSize: 30} }>{title}</div>
                <div style={ { color:'#777' } }>Rs {price}</div>
                <div style={ { color: '#777'} }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    
                    <img 
                        alt="increase" 
                        className="actions-icons" 
                        src={plus} 
                        //onClick={this.increaseQuantity}
                        onClick= { () => onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="actions-icons" 
                        src={minus} 
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="actions-icons" 
                        src={remove} 
                        onClick = {() => onDeleteProduct(product.id)}
                    />

                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height:115,
        width:115,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;