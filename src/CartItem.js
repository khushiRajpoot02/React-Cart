import React from "react";

const CartItem=(props)=>{
   
   /* increaseQuantity=()=>{
        //this.state.Qty+=1;
     //this.setState({
      //  Qty:this.state.Qty + 1,  
      // });
       // console.log("this",this.state);
       this.setState((prevState)=>{
           return{
               Qty:prevState.Qty+1
           }
       })
    }
    decreaseQuantity=()=>{
        const {Qty}=this.state;
        if(Qty===0){
            return;
        }
this.setState((prevStated)=>{
    return{
      
        Qty:prevStated.Qty-1
    }

});
    }*/
    
        //console.log("this.props",this.props);
        const {price,title,Qty}=props.product;
        const{
            product,
            onDecreaseQuantity,
            onIncreaseQuantity,
            onDelete,

        }=props
        return(
            <div className="cart-item">
            {/*this.props.jsx*/}
            <div className="left-block">
            <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:"#777"}}>Rs {price}</div>
            <div style={{color:"#777"}}>Qty: {Qty}</div>
            <div className="cart-item-actions">
            {/*button*/}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={()=>onIncreaseQuantity(product)}/>
            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" onClick={()=>onDecreaseQuantity(product)}/>
            <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" onClick={()=>onDelete(product.id)}/>
            </div>
            </div>
            </div>
        );
    
}
const styles={
     image: {
height:110,
width:110,
borderRadus:4,
backgroundColor:"#ccc",
    }
}
export default CartItem;



