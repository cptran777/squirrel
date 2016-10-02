/******************* IMPORT DEPENDENCIES *******************/

import { parse } from '../../node_modules/acorn/dist/acorn.js';
import { asArray } from './util';

/******************** HELPER FUNCTIONS *********************/

// Takes a syntax tree and a list of string terms and returns whether
// at least one of them appears in the tree
const searchTreeSome = (syntaxTree, terms) => {
  
  terms = asArray(terms);

  for (let i = 0; i < terms.length; i++) {
  	if (syntaxTree.type === terms[i]) {
  	  return true;
  	}
  }

  if (syntaxTree.body) {
  	let body = asArray(syntaxTree.body);
  	for (let x = 0; x < body.length; x++) {
  	  if (searchTreeSome(body[x], terms)) {
  	  	return true;
  	  }
  	}
  }

  return false;

};

// Returns an array of nodes from a syntax tree that match a 
// specific given term
const searchTreeFind = (syntaxTree, term, output) => {
  
  output = output || [];

  if (syntaxTree.type === term) {
  	output.push(syntaxTree);
  }

  if (syntaxTree.body) {
  	let body = asArray(syntaxTree.body);
  	for (let x = 0; x < body.length; x++) {
  	  searchTreeFind(body[x], term, output);
  	}
  }

  return output;

};

// Takes a syntax tree and returns whether all the given terms appear
// as nodes in the tree
const searchTreeAll = (syntaxTree, terms) => {
  
  terms = asArray(terms);

  for (let i = 0; i < terms.length; i++) {
  	if (syntaxTree.type === terms[i]) {
  	  terms.splice(i, 1);
  	}
  }

  if (syntaxTree.body) {
  	let body = asArray(syntaxTree.body);
  	for (let x = 0; x < body.length; x++) {
  	  searchTreeAll(body[x], terms);
  	}
  }

  return terms.length < 1;

};

/********************* MAIN API OBJECT *********************/

const squirrel = {};

export default squirrel;

