// In the below example, we have a list of numbers of varying lengths.
// We want to prepend “0” so that all the items have the same length of 10 digits for display purposes.
// We can use padStart(10, '0') to easily achieve this.

const formatted = [0, 1, 12, 123, 1234, 12345].map(num => {
  num.toString( ).padStart(10, '0'); //Adds '0' until len is 0
});
console.log(formatted)
