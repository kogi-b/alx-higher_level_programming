#!/usr/bin/node

const dict = require('./101-data').dict;

const myDict = {};

for (const value in dict) {
  if (myDict[dict[value]]) {
    myDict[dict[value]].push(value);
  } else {
    myDict[dict[value]] = [value];
  }
}

console.log(myDict);
