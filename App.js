import React from 'react';
import ReactDOM from 'react-dom';

const Heading = () => (
    <h1>Hello</h1>,
    <h2>Hi</h2>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);