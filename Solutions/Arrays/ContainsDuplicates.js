/*
*Problem: 217 - Contains Duplicate
*Tags: arrays, easy, javascript
*LeetCode Link: https://leetcode.com/problems/contains-duplicate/description/
*/

var containsDuplicate = function(nums) {
    // Constraints
    // There will always be a length in nums array
    // Each element within nums array will be a number

    // Approach
    // We're going to keep it simple
    // We're going to start with a normal for loop. We're going to isolate the first element and turn it into a variable
    // Once we have that, we'll continue through our loop and we'll then assess if there is a similar number.
    // If there is a similar number, we'll return true, otherwise, we'll return false

    //! Very very slow
    //! Nested for Loop

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j< nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             return true
    //         }
    //     }
    // }
    // return false;

    //! Very Slow but passes
    // Sorted Method
    // let sorted = nums.sort()

    // for (let i = 0; i < nums.length; i++) {
    //     if (sorted[i] === sorted[i+1]) {
    //         return true;
    //     }
    // }
    // return false;


    //! Also very slow, but passes all tests
    // For Each Sorted Method
    // Returns don't work inside of forEach because it's a call back function

    // const sorted = nums.sort()
    // //Case 1
    // // [ 1, 1, 2, 3 ]

    // let hasDupe = false

    // sorted.forEach((eachEl, i) => {
    //     if (sorted[i] === sorted[i+1]) {
    //         hasDupe = true;
    //     }
    // })

    // return hasDupe;

    //! Set method
    //! Super super fast. Uses sets to check duplicates. 
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num)
    }
    return false;
};
