/*
*Problem: 242 - Valid Anagram
*Tags: arrays, medium, javascript
*LeetCode Link: https://leetcode.com/problems/top-k-frequent-elements/
*/

var topKFrequent = function(nums, k) {
    //! Constraints
    //! Nums will always have a length, each el inside of nums will be a number
    //! k will always be in the range of 1 and the # of unique elements in an array
    //! the answer will be unique

    //! The idea is to find specific items inside of the array that appear a k number of times. If there are multiple, 
    //! Throw multiple items into the result array. 

    //! Approach
    //! Iterate through the nums array and group them by the amount of times that they appear in a map. Once we do that, 
    //! Any number that appears k or more times, will be put into the array.
    //! Start with an empty map. Iterate using a for of loop through nums. If the number appears in our nums array, we'll group them.
    //! Compare the amount of times a number has appeared with k. If it is greater, then add to our result array.

    let result = [];
    let map = {};

    for (let num of nums) {
        if(!map[num]) {
            map[num] = [];
        }
        map[num].push(num)
    }

    // console.log(Object.keys(map))
    // //[ [ 1, 1, 1 ], [ 2, 2 ], [ 3 ] ]

    Object.entries(map).forEach(([key, array]) => {

     //! Array is [ 1, 1, 1 ] [ 2, 2 ] [ 3 ]
        if (array.length >= k) {
            result.push(parseInt(key))
        }
    })

    // console.log(result)
    return result;

};
