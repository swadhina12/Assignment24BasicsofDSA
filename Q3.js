//**Majority Element**

function majorityElement(nums) {
    let count = 0;
    let candidate = null;
  
    for (const num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += num === candidate ? 1 : -1;
    }
  
    return candidate;
  }
//You can test the function with the provided examples:
console.log(majorityElement([3, 2, 3]));                        // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));           // Output: 2
console.log(majorityElement([-1, 1, 1, 1, 2, 1, 3, 1, 1]));    // Output: 1
