/*
*Problem: 242 - Valid Anagram
*Tags: arrays, easy, javascript
*LeetCode Link: https://leetcode.com/problems/valid-anagram/
*/

var isAnagram = function(s, t) {
    //! Constraints
    //! There will always be a length for both s and t
    //! s and t both consists of a string of lower case english letters

    //! Approach
    //! The first idea is to basically make them into an array that splits each one, then reverse them and compare them to one another
    //! Then if they compare and are the same, then we can just return true. Otherwise, we return false

    const sArr = [...s].sort()
    const tArr = [...t].sort()
    console.log(sArr)
    console.log(tArr)

    if (sArr.toString() === tArr.toString()) {
        return true
    } else {
        return false
    }

    

};
