"use strict";

function isPrime(n){
    // based on JS Data Structures and Algorithms, Sammie Bae
    // time complexity O(sqrt(n))
    if (n <= 1) return false;
    
    // 2 and 3 are prime
    if (n <= 3) return true;

    // quick eliminate multiples of 2 or 3
    if (n%2 === 0 || n%3 === 0) return false;

    // all primes > 3 are either 6x-1 or 6x+1
    for (let i = 5; i**2<=n; i+=6 ) {
        if (n%i === 0 || n%(i+2) === 0)
        return false
    }
    
    return true;
}

// Exercise: Find all integer primes less than or equal to n.

function findPrimes(n) {
    // time complexity O(nsqrt(n))
    var result = new Array;
    if (n > 3) {result = [2, 3]}

    for (let i=4; i<n; i++) {
        if (isPrime(i)) result.push(i);
    }
    return result;
}