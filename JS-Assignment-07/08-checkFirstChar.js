/*Write a Javascript function to test whether the first character of a string is lowercase. */

//Ans: We can use regex
//Eg- 
let str = "Kfaa8861svsg xdgx924688";

let regex = /^[A-Z]/;  

if(regex.test(str)){
    console.log("valid");
}
else{
    console.log("invalid");
}