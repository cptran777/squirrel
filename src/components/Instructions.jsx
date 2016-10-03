import React from 'react';

class Instructions extends React.Component {
  
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className="col-sm-6 instructions">
  	    Instructions for the code
  	    1) Declare a variable
  		2) Write a for loop with a counter
		3) Increment another variable inside the for loop
  	  </div>
  	);
  }
}

export default Instructions;