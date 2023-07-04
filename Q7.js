//Sliding Window Maximum**
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Stores indices of elements in descending order of their values
  
    for (let i = 0; i < nums.length; i++) {
      // Remove indices of elements that are no longer in the current window
      if (deque.length > 0 && deque[0] <= i - k) {
        deque.shift();
      }
  
      // Remove indices of smaller elements from the deque
      while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
        deque.pop();
      }
  
      deque.push(i);
  
      // Add the maximum element of the current window to the result
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
//You can test the function with the provided example:

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]  