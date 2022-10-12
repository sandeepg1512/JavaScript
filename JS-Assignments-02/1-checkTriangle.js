// Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function checkTriangle(x,y,z)
{
    if (x == y && y == z)
        console.log("Equilateral Triangle");

    else if (x == y || y == z || z == x)
        console.log("Isosceles Triangle");

    else
        console.log("Scalene Triangle");
}

//let x=2; y=3, z=4;
let x=3; y=3, z=4;

checkTriangle(x, y, z);