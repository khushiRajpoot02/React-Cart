import React from "react";

const Navbar=(props)=>{
        return(
            <div style={style.nav}>
               <div style={style.carIconContainer}>
                  <img style={style.CartIcon} src="https://cdn-icons.flaticon.com/png/512/3002/premium/3002254.png?token=exp=1644749530~hmac=bfed63787ba14f43ae2fdfec810380f4" alt="cart-icon">
                </img>
                <span style={style.cartCount}>{props.count}</span>
            </div>
            </div>
        );
}
const style={
    CartIcon:{
        height:70,
        marginRight:20,
    },
    nav:{
        height:70,
        background:"#4267b2",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center",
    },
    carIconContainer:{
        position:"relative",
    },

    cartCount:{
        background:"red",
        borderRadius:"20px",
        padding:"4px,8px",
        position:"absolute",
        right:4,
        top:-4,

    }
}
export default Navbar;
