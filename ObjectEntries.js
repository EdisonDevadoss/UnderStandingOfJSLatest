const cars = { BMW: 3, Tesla: 2, Toyota: 1 };

//Instead of extracting keys and then again looping
Object.keys(cars).forEach(key => {
//  console.log("key " + key + "value: " + cars[key]);
});
//Use Object.entrie
for (let [key, value] of Object.entries(cars)) {
  //console.log(`key: ${key} value: ${value}`);
}

//Old method
//Instead of...
//Get object keys and then add each item to Map in a loop
const map1 = new Map();
// console.log(map1); //return empty Object

Object.keys(cars).forEach((key)=>{
  map1.set(key, cars[key])
})

console.log(map1);


//2017 and onwards
//latest methods
const map = new Map(Object.entries(cars));

console.log(map)
