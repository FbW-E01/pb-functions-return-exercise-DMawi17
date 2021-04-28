// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

checkAge = (age) => {
    if (age >= 18) {
        isItTrue = true;
    } else {
        isItTrue = false;
    }
    return isItTrue
};

console.log(checkAge(18))


// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  return Math.min(a, b);
  
}
console.log(min(5, 3));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n){
  return x ** n
  };
console.log(pow(3, 3));

