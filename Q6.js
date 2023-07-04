//Top K Frequent Words**

function topKFrequent(words, k) {
    const frequencyMap = new Map();
  
    for (const word of words) {
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
  
    const sortedWords = Array.from(frequencyMap.keys()).sort((a, b) => {
      const frequencyA = frequencyMap.get(a);
      const frequencyB = frequencyMap.get(b);
  
      if (frequencyA !== frequencyB) {
        return frequencyB - frequencyA; // Sort by frequency (descending order)
      } else {
        return a.localeCompare(b); // Sort by lexicographical order if frequencies are equal
      }
    });
  
    return sortedWords.slice(0, k);
  }
//You can test the function with the provided examples:

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// Output: ["i", "love"]

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
// Output: ["the", "is", "sunny", "day"]
