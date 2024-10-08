/*
*Problem: 128 - Longest Consecutive Sequence
*Tags: arrays, medium, javascript
*LeetCode Link: https://leetcode.com/problems/longest-consecutive-sequence/
*/

var longestConsecutive = function(nums) {
    //! Constraints
    //! nums length will always exist, each element in nums will be a number.

    //! Approach
    //! The idea is to first sort the array and then iterate using a while loop to check each element of the array.
    //! While we're checking each element, we're going to compare with the one behind it, and if its one greater than the left element,
    //! then we'll add it to our consecutive array. Once we have our consecutive array, then we'll return that length. 

    const res = [];
    let streak = 1;
    let longest = 1;

    const sortedNums = nums.sort((a,b) => {
        return a - b
    })

    if (sortedNums.length === 0) {
        return 0;
    }

    for (let i = 0; i < sortedNums.length; i++) {
        const curr = sortedNums[i];
        const next = sortedNums[i+1];
        if (next === curr + 1) {
            res.push(curr);
            streak++
        } else if (next !== curr) {
            res.push(curr)
            longest = Math.max(longest, streak)
            streak = 1
        }
    }

    return Math.max(longest, streak)

};
