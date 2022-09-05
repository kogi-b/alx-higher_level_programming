#!/usr/bin/node

const process = require('process');

function add (a, b) {
  console.log(a + b);
}

const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[3]);

add(firstNumber, secondNumber);
