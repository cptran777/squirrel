import React from 'react';

/******************* COMPONENT IMPORTS *********************/

import Instructions from './Instructions';
import CodeWindow from './CodeWindow';

/********************** MAIN OBJECT ************************/

// Main application component
class App extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div className="myapp">
  	    <div className="row">
  	  	  <Instructions />
  	  	  <CodeWindow />
  	  	</div>
  	  </div>
  	);
  }

}

export default App;