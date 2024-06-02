#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // If w or h is 0 or not positive integer, create an empty object
    }
  }

  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log('x'.repeat(this.width));
      }
    }
  }
}
module.exports = Rectangle;
