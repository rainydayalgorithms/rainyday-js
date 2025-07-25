/* LONGEST NON-REPEATING SUBSTRING
You are given a string. Return the length of the longest substring that does not 
have any repeating letters */

/* How this works:
As you loop through with your right pointer, add that character and how many times 
it has been seen to the map.
Once you get to the map showing that the chracter has been seen more than once, you 
then go to the left pointer: Remove the character from the map that's at the l spot 
and then increment l.

Then, you check to see if the current substring is longer than the previous longest or not, 
and save the longer value to result. Return result once you've looped through the entire 
string. */

const lengthOfLongestSubstring = function(s) {
    const chars = new Map();
    let left = 0;
    let right = 0;
    let result = 0;
    
    while (right < s.length) {
        let r = s.charAt(right);
        chars.set(r, (chars.get(r) || 0) + 1);

        while (chars.get(r) > 1) {
            let l = s.charAt(left);
            chars.set(l, chars.get(l) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
};

module.exports = { lengthOfLongestSubstring }