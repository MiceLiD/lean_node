/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stack = [],
        maxCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (stack.indexOf(s[i]) === -1) {
        stack.push(s[i])
        if (stack.length > maxCount) {
          maxCount = stack.length
        }
      } else {
        stack.splice(0, stack.indexOf(s[i]) + 1)
        stack.push(s[i])
      }
    }
    return maxCount
};

console.log(lengthOfLongestSubstring('dvdf'))