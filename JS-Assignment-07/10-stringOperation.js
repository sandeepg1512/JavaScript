/*10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

let str = "this is Asia. And we are at south Asia";
// Convert the String into upper case.
console.log(str.toUpperCase());

// Convert only the first character to uppercase.
str = "this is Asia. And we are at south Asia";
let convert = (str)=>{
    let cap = str.charAt(0).toUpperCase() + str.slice(1);
    return cap;
}
console.log(convert(str));

// Convert the String into lower case.
str = "this is Asia. And we are at south Asia";
console.log(str.toLowerCase());

// Break the string into two halves and swap them.
str = "Hello World";
let N = str.length;
let str1 = str.slice(0, Math.floor(N/2));
let str2 = str.slice(Math.floor(N/2), N);
str = str2+str1;
console.log(str);

// Count the repeating characters.
str = "this is Asia. And we are at south Asia";
let mp = new Map();
for(let i = 0; i < str.length; i++){
    if(mp[str[i]] == undefined){
        mp[str[i]] = 1;
    }else{
        mp[str[i]] += 1;
    }
}
console.log(mp);

// Reverse the string
str = "this is Asia. And we are at south Asia";
console.log(str.split("").reverse().join(""));