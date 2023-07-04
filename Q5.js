//Ugly Numbers**

function nthUglyNumber(n) {
    const uglyNumbers = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
  
    while (uglyNumbers.length < n) {
      const nextUgly = Math.min(
        uglyNumbers[i2] * 2,
        uglyNumbers[i3] * 3,
        uglyNumbers[i5] * 5
      );
  
      uglyNumbers.push(nextUgly);
  
      if (nextUgly === uglyNumbers[i2] * 2) i2++;
      if (nextUgly === uglyNumbers[i3] * 3) i3++;
      if (nextUgly === uglyNumbers[i5] * 5) i5++;
    }
  
    return uglyNumbers[n - 1];
  }
  //You can test the function with the provided examples:
  console.log(nthUglyNumber(10));  // Output: 12
console.log(nthUglyNumber(1));   // Output: 1
