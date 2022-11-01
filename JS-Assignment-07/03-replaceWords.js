/* Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/

const str1 = "Hii Boy"; 
let arr = str1.split(" "); 
 
[a, b] = [arr[0], arr[1]];
[arr[0], arr[1]] = [b, a];

let str2 = arr.join(' '); 
console.log(str2);