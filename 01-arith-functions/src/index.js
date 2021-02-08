"use strict";

/* Exercise
For zero() through nine(), the following should produce valid results: 
nine(plus(one()));
eight(minus(five()));
seven(times(three())); 
seven(dividedBy(four()));
*/ 

function zero(cb)	{ return (cb ? cb(0) : 0); };
function one(cb) 	{ return (cb ? cb(1) : 1); };
function two(cb) 	{ return (cb ? cb(2) : 2); };
function three(cb) 	{ return (cb ? cb(3) : 3); };
function four(cb) 	{ return (cb ? cb(4) : 4); };
function five(cb) 	{ return (cb ? cb(5) : 5); };
function six(cb) 	{ return (cb ? cb(6) : 6); };
function seven(cb) 	{ return (cb ? cb(7) : 7); };
function eight(cb) 	{ return (cb ? cb(8) : 8); };
function nine(cb) 	{ return (cb ? cb(9) : 9); };

function plus(innerVal) {
    return (outerVal) => { 
        return outerVal + innerVal;
    };
}

function minus(innerVal) {
    return (outerVal) => { 
        return outerVal - innerVal;
    };
}

function times(innerVal) {
    return (outerVal) => { 
        return outerVal * innerVal;
    };
}

function dividedBy(innerVal) {
    return (outerVal) => { 
        return (outerVal / innerVal);
    };
}