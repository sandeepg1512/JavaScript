/* Write a JavaScript program to get the volume of a Cylinder, Sphere and
Cone with four decimal places using objects and classes.
Create classes for volumes for each geometric shape which returns the
output using the getVolume() method.
eg- to get volume of cylinder-
let obj= new Cylinder(radius,height);
obj.getVolume();
Formulas for volumes of the shapes-
1) Cylinder- Volume = πr^2h
where r is the radius and h is the height of the cylinder.
2)Sphere- Volume= 4/3πr^3
where r is the radius
3) Cone- Volume= πr^2h/3
where r is the radius and h is the height of the cone.
*/


// Volume of Cylinder
class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        console.log((Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4));
    }
}

let obj1 = new Cylinder(1, 7);
obj1.getVolume();

// Volume of Sphere
class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        let v = (4 * Math.PI * Math.pow(this.radius, 3))/3
        console.log(v.toFixed(4));
    }
}

let obj2 = new Sphere(1);
obj2.getVolume();

// Volume of Cone
class Cone{
    constructor(r, h){
        this.radius = r;
        this.height = h;
    }

    getVolume(){
        let v = (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
        console.log(v.toFixed(4));
    }
}

let obj3 = new Cone(1, 3);
obj3.getVolume();