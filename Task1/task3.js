"use strict";

 let calcSquareTriangle = (width, height) =>{
     return width * height;
 };
 let calcPerimeterTriangle = (width, height) =>{
     return width + height + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
 };

let calcSquareRectangle = (width, height) =>{
    return width * height;
};
let calcPerimeterRectangle = (width, height) =>{
    return 2 * width + 2 * height;
};

let calcSquareCircle = (width, height) =>{
    return Math.PI * Math.pow((width / 2), 2);
};
let calcPerimeterCircle = (width, height) =>{
    return Math.PI * width;
};


class Figure{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcSquare(){
        return this.width * this.height;
    };
    calcPerimeter(){
        return 2 * this.width + 2 * this.height;
    };

}

class Triangle extends Figure{
    calcSquare(){
        return this.width * this.height;
    };
    calcPerimeter(){
        return this.width + this.height + Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))
    };
}

class Rectangle extends Figure{
    calcSquare(){
        return this.width * this.height;
    };
    calcPerimeter(){
        return 2 * this.width + 2 * this.height;
    };
}

class Circle extends Figure{
    calcSquare(){
        return Math.PI * Math.pow((this.width / 2), 2);
    };
    calcPerimeter(){
        return Math.PI * this.width;
    };
}

let newCircle = new Circle(10, 10);
console.dir(newCircle);
console.log(newCircle.calcPerimeter(10, 10));