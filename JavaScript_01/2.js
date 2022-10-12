/* 
Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

function cTof(celsius)
{
    let temp=celsius;
    let Tof=temp*(9/5)+32;
    let msg=`${temp}\x80C is ${Tof}\x80F`;
    return msg; 
}

function fToc(fahrenheit)
{
    let ftemp=fahrenheit;
    let Toc=(ftemp-32)*(5/9);
    let msg=`${ftemp}\x80F is ${Toc}\x80C`;
    return msg;
}

let cmsg=cTof(60);
console.log(cmsg);

let fmsg=fToc(45);
console.log(fmsg);