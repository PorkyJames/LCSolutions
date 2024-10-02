/*
*Problem: 217 - Contains Duplicate
*Tags: arrays, medium, javascript
*LeetCode Link: https://leetcode.com/problems/group-anagrams/
*/

var groupAnagrams = function(strs) {
    //! Constraints
    //! strs array will always have a length and so will each string inside of the array
    //! each word in the string will all be lowercase English letters
    //! Each anagram should be grouped into their own array

    //! Approach
    //! Let's iterate through each item in the array using a for loop
    //! We're going to sort each element and if the sorted element is a new set, then we add it into it's own array
    //! Next, now that we have a bunch of sorted arrays, we can then return all of the arrays within another array

    //! Technically Passes but the time limit exceeded

    // let result = [];

    // for (let i = 0; i < strs.length; i++) {
    //     const sortedWord = [...strs[i]].sort().join('')
    //     //aet aet ant aet ant abt
    //     console.log(sortedWord)
    //     let found = false;

    //     for (let eachEl of result) {
    //         if([...eachEl[0]].sort().join('') === sortedWord) {
    //             eachEl.push(strs[i])
    //             found = true;
    //             break;
    //         }
    //     }

    //     if (!found) {
    //         result.push([strs[i]])
    //     }
    // }

    // return result;
    
    //! Hash Map Solution

    //! Initialize a Map, then iterate through our array. Once we do that, we're going to split, sort, and join them to have them group up in 
    //! pair values inside of our map.

    const map = {};

    for (let eachEl of strs) {
        const word = eachEl.split('').sort().join('')
        //! word === aet aet ant aet ant abt
        
        //! If one of our aet ant abt etc. doesn't exist in our map
        if (!map[word]) {
            //! Then we'll initialize a new array for it
            map[word] = [];
        }

        console.log(word)
        //! We're going to push the element into our map to organize them
        map[word].push(eachEl)

    }

    // If we were to just return map, it would give us a map of key pair values. We only want the values. 
    return Object.values(map)

};
