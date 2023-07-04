//Longest Substring Without Repeating Characters**

function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      if (!charSet.has(s[right])) {
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      } else {
        charSet.delete(s[left]);
        left++;
      }
    }
  
    return maxLength;
  }
//You can test the function with the provided examples:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
