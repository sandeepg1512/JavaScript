/* Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy”    Output: “HiiBoy”
*/

let str = "Hii Boy";
let x = str.replace(/ /g, "");     // using regex 
console.log(x);