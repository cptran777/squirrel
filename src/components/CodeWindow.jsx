import React from 'react';

import squirrel from '../lib/squirrel';

class CodeWindow extends React.component {
  
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  	  <div></div>
  	);
  }
}

export default Instructions;


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