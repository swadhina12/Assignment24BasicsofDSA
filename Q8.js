//Find K Closest Elements**

function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (x - arr[mid] > arr[mid + k] - x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return arr.slice(left, left + k);
  }
  //You can test the function with the provided examples:
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
  // Output: [1, 2, 3, 4]
  
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
  // Output: [1, 2, 3, 4]
    