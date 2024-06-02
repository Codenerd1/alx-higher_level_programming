#!/usr/bin/node
/**
* Rectangle - A class that defines a rectangle
* Args:
*  w: Instance attribute width
*  h: Instance attribute height
**/
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object if w or h are neither positive nor integer
    }
  }
}
module.exports = Rectangle;
