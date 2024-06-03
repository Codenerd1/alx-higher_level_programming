#!/usr/bin/node
exports.converter = function (base) {
  return function convert (number) {
    return number === 0 ? '' : convert(Math.floor(number / base)) + '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[number % base];
  };
};
