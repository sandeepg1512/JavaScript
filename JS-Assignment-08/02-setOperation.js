/* Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object
*/

let st = new Set; // Creating new set object

// Adding new element to set object
st.add(2);
st.add("Bangalore");
st.add("East");
st.add(x = ()=>{
    return console.log(25);
});
console.log(st);

// Deleting element from set object
st.delete(x);
console.log(st);