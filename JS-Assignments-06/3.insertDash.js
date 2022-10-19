/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

function insertDash(str)
{
    let ans=[str[0]];
    for(let i=1; i<str.length; i++)
    {
        if((str[i-1]%2 === 0) && (str[i]%2===0))
        {
            ans.push("-", str[i]);
        }
        else
        {
            ans.push(str[i]);
        }
    }
    return ans;
}

let str = "025468";
console.log(insertDash(str).join(''));