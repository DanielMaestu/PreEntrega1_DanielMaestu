import React from 'react'

export const CartWidgetComponent = () => {
    
    const styles = {
        color : "white",
        position: "relative"
        
    }
    
    const styleNotificacion = {
        color : "white",
        backgroundColor: "red",
        borderRadius: "50%",
        position: "absolute",
        top: "-12px",
        left: "80%",
        width : "14px",
        textAlign : "center",
        fontSize : "12px",
        
        padding: "1px"
        
    }
    
    
    
    
    return (
        <div>
        
        <a style={styles} href='/'><i  className="bi bi-cart"></i>
        <span style={styleNotificacion} >5</span>
        </a>
        
        
        </div>
        )
    }
