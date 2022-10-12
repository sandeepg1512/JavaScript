/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

factorial = (n)=>{
    let mul = 1
    for(let i = 1; i <= n ; i++){
        mul *= i
    }
    return mul
}

isPrime = (n) =>{
    if(n == 1) return false;
    for(let i = 2; i*i <= n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

prime = (a, b) => {
    console.log(`Prime number between range [${a},${b}] with their factorial are: `)
    for(let i = a; i <= b; i++){
        if(isPrime(i)){
            console.log(`Prime: ${i} and its factorial ${factorial(i)}`);
        }
    }
}
prime(70, 100);