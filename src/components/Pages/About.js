import React from 'react';

function About() {
    return  (
        <div style={{
            margin: '10px'
        }}>
            <h2>About us</h2>
            <p>This is a sample spa using react.js.</p>
            <p>Features covered in this app:</p>
            <div>
                <ul>
                    <li>App created using the Create react app package</li>
                    <li>Using JSX</li>
                    <li>Using React dom</li>
                    <li>Using React component lifecycle method React.render() </li>
                    <li>React class/function based components</li>
                    <li>App/Components state</li>
                    <li>Basic components styling</li>
                    <li>Passing data between components using Props</li>
                    <li>Handle events</li>
                    <li>Using React router dom package</li>
                    <li>Handle HTTP request</li>
                </ul>
            </div>
        </div>
    );
}

export default About;