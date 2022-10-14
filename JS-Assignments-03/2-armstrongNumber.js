/*
Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/

isArmstrong = (n) =>{
    let num = n;
    let sum = 0;
    while(n !== 0){
        let digit = n%10;
        sum += digit* digit*digit;
        n = Math.floor(n/10);
    }
    return (sum === num);
}

console.log(isArmstrong(165));
console.log(isArmstrong(153));
console.log(isArmstrong(675));