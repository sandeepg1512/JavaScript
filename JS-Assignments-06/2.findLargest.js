/*
Write a javascript function find_largest to return the nth largest number in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/

let arr = [3,45,6,7,23,5,7,8];

let find_largest = (k) => {
    let c = 0;
    for(let i = 0; i < arr.length-1; i++){
        let max = arr[i];
        let ind = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] > max){
                max = arr[j];
                ind = j;
                }
            }
        let temp = arr[ind];
        arr[ind] = arr[i];
        arr[i] = temp;
        c++;
        if(c === k) break;
    }
    return arr[k-1];

}

let k = 3
console.log(find_largest(k));