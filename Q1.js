//💡 1. **Roman to Integer**

function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}
//You can test the function with the provided examples:
console.log(romanToInt("III"));    // Output: 3
console.log(romanToInt("LVIII"));  // Output: 58
