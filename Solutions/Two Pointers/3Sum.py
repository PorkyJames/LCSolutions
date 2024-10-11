class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Constraints
        # No duplicate triplets, nums length will be 3 or greater. Each element has a value (integer)
        # i and j, i and k, j and k can be the same as long as they are UNIQUE

        # Approach
        # First, let's sort the list. It's best we sort it because we're going to 
        # iterate through our list and then for each element that we're on (which is i)
        # we'll utilize a two pointer solution for the list so that we can find
        # any type of 3 triplets.
        # If the target of j + k + current (i) > 0, then we decrement the k (right)
        # If the target of j + k + current (i) < 0, then we increment the j (left)
        
        res = []

        nums.sort()

        for i in range(len(nums) - 1):
            left = i + 1 #needs to be an index, not a value
            right = len(nums) - 1
            
            # Skips duplicates for i
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total > 0:
                    right -= 1
                elif total < 0:
                    left += 1
                elif total == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1

                    # Skip duplicates for 'left' and 'right' pointers
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

        return res
