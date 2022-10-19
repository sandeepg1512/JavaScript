/*
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
    ○ It is a subclass of Rectangle.
    ○ It contains a constructor and no other methods.
    ○ It can use the Rectangle class' area method to print the area of a Square object.

*/

class Rectangle
{
    constructor(length, breadth)
    {
        this.length=length;
        this.breadth=breadth;
    }
    area()
    {
        let area= this.length * this.breadth;
        console.log(`Area is ${area}`);
    }
}

class Square extends Rectangle
{
    constructor(side, length, breadth)
    {
        super(side, length, breadth);
        this.length= side;
        this.breadth= side;
    }
    
}

let area1= new Rectangle(4,5)
area1.area();

let square1 = new Square(5);
square1.area();