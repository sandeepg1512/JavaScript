/* Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.
*/

let set = new Set;
while(set.size < 4){
    set.add(Math.floor(Math.random()*10)+1);
}

if(set.has(8)){
    console.log(`This set has 8 and the set is `, set)
}
else{
    console.log(`This set does't has 8 and the set is `, set)
}