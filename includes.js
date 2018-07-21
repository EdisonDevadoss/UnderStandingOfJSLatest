//includes is a simple instance method on the Array and helps to
//easily find if an item is in the Array (including NaN unlike indexOf).

const arr = [1, 2, 3, 4, NaN, "edison"];

//Instead of
// This is the old version of find index in array of values
if (arr.indexOf(3) >= 0) {
  console.log(true);
}

//indexOf does not work for searching for NaN
if (arr.indexOf(NaN) >= 0) {
  console.log(true);
}

if(arr.includes("edison")){
  console.log('using include is', true);
}
