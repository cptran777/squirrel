# squirrel
A testing suite that uses acorn parser to parse JavaScript code and allows tests based on returned data.

Test suite is in alpha

## Documentation

`parse(string)` Parse returns an object that can be chained with `should`. Parse uses the acorn parser and therefore takes a string that is JavaScript code. 

`should` chained to `parse` function. Sets up `include` for a whitelist or `includeWith` that tests for code structure.


`not` can be chained to `should` in order to set up an opposite test.


`include(string or Array)` is a whitelist test that looks through the parsed code for certain code elements. 

Notable code syntax elements: 
- For statement: 'ForStatement'
- While loop: 'WhileStatement'
- Variable Declaration: 'VariableDeclaration'
- Expression Statement: 'ExpressionStatement'
- Code Block: 'BlockStatement'
- If statement: 'IfStatement'

Include will test for a specific term or the inclusion of all of multiple terms by passing an array of string terms. It can also be a blacklist test by being chained to `not` instead.

Example:
`parse(code).should.not.include('ForStatement')`


`includeWith(string)` will start a test for code structure. Currently the only thing to test is for a nested term that exists within another 

Example:
`parse(code).should.includeWith('ForStatement').nested('IfStatement')`