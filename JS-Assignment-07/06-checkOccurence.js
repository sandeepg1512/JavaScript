/* What string method can be used to check the occurrence of a specified
text in a string? */

//Ans : include method, search method and match method are used.

//Eg- 

let str = "Delhi is in is India"
let a = str.includes("Is");  // false
let a = str.search("is");  // 6
let a = str.match(/is/g);  // return array // [ 'is', 'is' ]