"use strict";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const asyncFunction = async () => {
    try {
        await delay(1000); // creates a promise that resolves after 1s
        console.log('1s');
        await delay(1000);
        console.log('2s');
        await delay(1000);
        console.log('3s');
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
};
console.log('>> before asyncFunction() call');
asyncFunction();
console.log('>> after asyncFunction() call');
