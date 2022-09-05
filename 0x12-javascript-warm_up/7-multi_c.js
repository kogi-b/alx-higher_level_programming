#!/usr/bin/node

const process = require('process');
if (isNaN(process.argv[2])) {
  console.log('Missing number of occurrences');
} else {
  while (process.argv[2] > 0) {
    console.log('C is fun');
    process.argv[2]--;
  }
}
