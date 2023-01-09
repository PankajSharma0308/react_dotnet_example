import React from "react";
 
export const Header = () => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: 'rgb(80,224,224)',
        color:'white',
        textAlign: 'center'
    }

    return (
        <div style={headerStyle}>
            <h1>React with .NET</h1>
        </div>
    )
}