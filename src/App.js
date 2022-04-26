
import React, {Component} from 'react';


function App (){
    const element = (
        <div>
            <h1>Hello React!</h1>
            <h2>It is {new Date().toLocaleTimeString()}. </h2>
        </div>
    )
    return element;
}
setInterval(App, 1000)
export default App;