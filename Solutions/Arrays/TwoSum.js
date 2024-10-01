/*
*Problem: 1 - Two Sum
*Tags: arrays, easy, javascript
*LeetCode Link: https://leetcode.com/problems/two-sum/
*/

var twoSum = function (nums, target) {
    //! Constraints
    //! nums will always have a length
    //! each element inside of the nums array will be a number
    //! the target will always be a number
    //! There will only be exactly ONE solution

    //! Approach
    //! Use a for loop to loop through the first and then a 2nd for loop to loop through the 2nd elements
    //! If the 2 numbers are equivalent to the target, then we return the indicies of target within an array.

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    
}
