import React from 'react';
import ReactDOM from 'react-dom';


// create a new component. this component should produce some html

const App = function() { //this function is a class ie it constructs instances of what is inside the func
  return <div> Hi! </div>;
}

// insert the component's generated html and put it in the dom

ReactDOM.render(<App />, document.querySelector('.container')); //an instance of the class must be passed to the dom, not the class itself
//that is what a self closing jsx tag looks like
//the second argument can be thought of as a target destination for the render
