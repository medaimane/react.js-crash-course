import React from 'react';

function Header() {
    return  (
        <header style={style.header}>
            <h1>The Store</h1>
        </header>
    );
}

const style = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center'
    }
};

export default Header;