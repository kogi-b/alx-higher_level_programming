#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let nb = 0;

  if (list && searchElement) {
    nb = (list.filter(element => element === searchElement))
      .length;
  }

  return nb;
};
