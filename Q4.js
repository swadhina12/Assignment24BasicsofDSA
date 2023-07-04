//Group Anagram**

function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      const key = [...str].sort().join('');
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
  
    return Array.from(map.values());
  }

  //You can test the function with the provided examples:

  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]
