import React from 'react';

import squirrel from '../lib/squirrel';

const Result = (props) => {

  return props.message ? (
  	<div>
  	  {props.message}
  	</div>
  ) : (<div></div>);
};

class CodeWindow extends React.Component {
  
  constructor(props) {
  	super(props);

  	this.state = {
  	  code: '',
  	  message: null
  	}

  }

  updateCode(e) {
  	console.log(e.target.value);
  	this.setState({code: e.target.value});
  }

  checkCode() {
  	// This probably would get the proper test suite from the server
  	// in an actual application

  	let parsedCode = squirrel.parse(this.state.code);

  	let testSuite = (code) => {

  	  if (!code.should.include(['ForStatement', 'VariableDeclaration'])) {
  	  	this.setState({
  	  	  message: 'FAILED: Code does not include a for statement and variable declaration'
  	  	});
  	  } else if (!code.should.not.include('WhileStatement')) {
  	  	this.setState({
  	  	  message: 'FAILED: Code should not include a while statement'
  	  	});
  	  } else if (!code.should.includeWith('ForStatement').nested('ExpressionStatement')) {
  	  	this.setState({
  	  	  message: 'FAILED: Code should have included an variable increment inside a for statement'
  	  	});
  	  } else {
  	    this.setState({message: 'SUCCESS: Congratulations!'});
  	  }


  	};

  	testSuite(parsedCode);

  }

  render() {
  	return (
  	  <div className="col-sm-6 codewindow">
  	    <textarea className="codetext" onChange={this.updateCode.bind(this)}></textarea>
  	    <button className="btn" onClick={this.checkCode.bind(this)}>Submit</button>
  	    <Result message={this.state.message}/>
  	  </div>
  	);
  }
}

export default CodeWindow;


let myCode = '{ var x = 42; }\n' + 
   'for (var y = 0; y < x; y++) { \n' + 
   'x--; \n' +
   '} \n' + 
   'while (y < 1000) {\n' +
   'y++; \n' +
   '}';



console.log(squirrel.parse(myCode).should.include(['ForStatement', 'VariableDeclaration']));
console.log(squirrel.parse(myCode).should.includeWith('ForStatement').nested('ExpressionStatements'));

console.log('we are okay');