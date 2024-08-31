"use strict";
{
    function double(randomText) {
        return this.value * 2 + randomText.length;
    }
    let obj = {
        value: 3,
        double: double
    };
    // let obj1 = {
    //   vale: 4,
    //   double: double
    // }
    console.log('>> ', obj.double('this is random text')); // 6
    // obj1.double('this is random text');
}
