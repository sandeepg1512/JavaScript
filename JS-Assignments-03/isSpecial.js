/*
Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

factorial = (n) => {
    let mul = 1;
    for(let i = 1; i <= n; i++){
        mul *= i;
    }
    return mul;
}

isSpecial = (n) => {
    let num = n;
    let sum = 0;
    while(n !== 0){
        let dig = n % 10;
        sum += factorial(dig);
        n = Math.floor(n/10);
    }
    return (sum === num);
}

console.log(isSpecial(145));
console.log(isSpecial(5));
console.log(isSpecial(6));