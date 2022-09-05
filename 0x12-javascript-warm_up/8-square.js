#!/usr/bin/node

const process = require('process');
if (isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const size = process.argv[2];
  for (let j = 0; j < size; j++) {
    console.log('X'.repeat(size));
  }
}
