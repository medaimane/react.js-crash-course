import React from 'react';

function Footer() {
    return (
        <footer style={style.footer}>
            <div className="content has-text-centered">
                <p style={{marginBottom: '0'}}>Sample react.js spa by
                    <a href="https://medaimane.github.io"
                       target="_blank"
                       rel="noopener noreferrer">medaimane</a>
                </p>
                <p style={{marginTop: '0'}}>
                    (<a href="https://github.com/medaimane/angular7-crash-course/"
                        target="_blank"
                        rel="noopener noreferrer">code source</a>)
                </p>
            </div>
        </footer>
    );
}

const style = {
    footer: {
        margin: '5px',
        padding: '5px',
        textAlign: 'center',
        color: 'gray'
    }
};

export default Footer;