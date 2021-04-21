// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

checkAge = (age) => {
    if (age >= 18) {
        isItTrue = true;
    } else {
        isItTrue = false;
    }
    console.log(isItTrue);
};
checkAge(18);

// Write a function min(a,b) which returns the least of two numbers a and b.
min = (a, b) => console.log(Math.min(a, b));
min(5, 3);

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
pow = (x, n) => console.log((isItSimple = x ** n));
pow(3, 3);
