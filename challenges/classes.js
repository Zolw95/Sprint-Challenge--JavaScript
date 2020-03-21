// 1. Copy and paste your prototype in here and refactor into class syntax.




/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    };
    volume() {
        return this.length * this.width * this.height;
    };
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
};

let cuboid = new CuboidMaker(4, 5, 5);
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(a) {
        super(a, a, a);
    };
    volume() {
        return Math.pow(a, 3);
    };
    surfaceArea() {
        return Math.pow(a, 2) *6;
    };
}

let cube = new CubeMaker(10);
console.log(cube.surfaceArea());
console.log(cube.volume());