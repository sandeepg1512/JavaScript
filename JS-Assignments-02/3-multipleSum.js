// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;
for (let num = 0; num < 1000; num++)
{
    if (num % 3 === 0 || num % 5 === 0)
    {
       sum += num;
    }
}
console.log(sum);