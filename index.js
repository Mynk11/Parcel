import React from 'react';
import ReactDOM from 'react-dom';


const Hello = () => {
    console.log("called");
    console.log("print :", document.getElementById('app'))
    return (
        <div> Parcel Component </div>

    );

}


ReactDOM.render(<Hello />, document.getElementById('app'));
//npm install --save-dev parcel-bundler babel-preset-env babel-preset-react
