import React from 'react'

export const MainLayout = ({children}) => {
    
    const styles = {
        backgroundColor : "white",
        color: "black",
        
    }
    
    
    return (
        <div style={styles}>
        {children}
        </div>
        )
    }
