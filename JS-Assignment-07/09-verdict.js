/* Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?
*/
// Using regex
// let input = "YeS";
// let input = "Yes";
let input = "yeS";

let regex = /^[Yy][Ee][Ss]$/;

if(regex.test(input)){
    console.log("correct");
}
else{
    console.log("incorrect");
}