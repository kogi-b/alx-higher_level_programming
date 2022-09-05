#!/usr/bin/node

const process = require('process');

function factorial (numb) {
  if (isNaN(numb)) {
    return 1;
  } else if (Number(numb) === 0 || Number(numb) === 1) {
    return 1;
  } else {
    const args = Number(numb);
    return args * factorial(args - 1);
  }
}

const theNumber = process.argv[2];

console.log(factorial(theNumber));
