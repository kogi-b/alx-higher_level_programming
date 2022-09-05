#!/usr/bin/node

const getArgument = function (myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (isNaN(myArray[i])) {
      myArray.splice(i, i);
    }
  }
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = parseInt(myArray[i]);
  }

  return myArray;
};

const process = require('process');

const myArray = process.argv.slice(2, process.argv.length);
if (myArray < 2) {
  console.log(0);
} else {
  console.log(getArgument(myArray)
    .sort().reverse()[1]);
}
