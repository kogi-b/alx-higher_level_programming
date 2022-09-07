#!/usr/bin/node

const fs = require('fs');
const process = require('process');

if (process.argv.length >= 5) {
  const fileOne = process.argv[2];
  const fileTwo = process.argv[3];
  const fileThree = process.argv[4];
  fs.copyFile(fileOne, fileThree, (err) => {
    if (err) throw err;
  });

  fs.appendFileSync(fileThree, fs.readFileSync(fileTwo, 'utf8'), 'utf-8');
}
