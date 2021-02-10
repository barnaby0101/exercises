"use strict";

// Exercise: convert base10 value to binary 

function baseTenToBin(n) {
    let result = new Array;

    baseTenToBinHelper(n);
    return result.join("");

    function baseTenToBinHelper(val) {
        if (val < 1) return;
        else {
            result.unshift(val%2);
            baseTenToBinHelper(Math.floor(val/2));
        }
    }
}

// Exercise: Generate array with Fibonacci sequences to the nth value

function fib(n) {
    if (n < 1) return "Argument must be greater than 0";
    if (n === 1) return [1];

    let arr = [1, 1];
    for (let i = 0; i < n-2; i++) {
        let sum = arr[i] + arr[i+1];
        arr.push(sum);
    }
    return arr;
}

function findFib(n) {       // 1 1 2 3 5 8  n=6 -> 8
    if (n <= 1) return n;
    else { return findFib(n-1) + findFib(n-2) };
}
