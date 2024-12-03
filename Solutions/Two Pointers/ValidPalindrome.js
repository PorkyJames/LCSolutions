// Problem
// Asking us to see if the string that is provided is a palindrome. 

// Questions
// Will the string ever include a mixture of upper or lower case letters? 
// Will the string ever be empty?
// Will the string include non-alphanumeric characters?
// Will the string contain integers?
// Will the string be odd amount of characters or even? Or both?

// Approach
// Let's solve it iteratively using a two pointer method O(n).
// We'll first adjust the string so that it's easier to digest. We'll remove any non-alphanumeric characters and lowercase them all
// Once we have our sanitized string, we'll iterate through and then use the two pointer method. 
// We'll establish a left and a right and then compare the two. If they are equal, then we'll increment and decrement the left and right pointers, respectively.
// Once we reach the middle point, if there are no more charcters in the string, then we return true. If there is one character in the string, then we also return true. 

var isPalindrome = function(s) {

    let saniS = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    // console.log(saniS)

    let right = saniS.length - 1
    let left = 0

    if (saniS.length === 0) {
        return true
    }

    while (left < right) {
        if (saniS[left] !== saniS[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true
};

