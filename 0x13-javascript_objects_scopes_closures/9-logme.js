#!/usr/bin/node

let nbLogs = 0;

exports.logMe = function (item) {
  if (item) {
    console.log(`${nbLogs}: ${item}`);
    nbLogs++;
  }
};
