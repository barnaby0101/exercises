"use strict";

// implementation of CLRS Intro to Alg p 18
// note the original assumes 1-indexed arrays

function insertionSort(array) {
    for (let j = 1; j < array.length; j++) {
        let key = array[j];
        // for all index >1, if array[i-1] > array[i], swap them
        let i = j-1;
        while ((i >= 0) && (array[i] > key)) {
            array[i + 1] = array[i];
            i--;
            array[i + 1] = key;
        }
    }
    return array;
}

insertionSort([5, 4, 3, 2, 1]);
