// Write a program to find the factorial of a number.

function factorial(num)
{
    let ans = 1;
    if (num == 0 || num == 1)
      return ans;
    else
    {
        for(var i = num; i >= 1; i--)
            ans = ans * i;
        return ans;
    }  
  }
  let num = 5;
  ans = factorial(num)
  console.log("The factorial of " + num + " is " + ans);