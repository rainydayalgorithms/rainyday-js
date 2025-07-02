/**
 * @param {string} s
 * @return {boolean}
 */

// There are multiple solutions to this problem.
// SOLUTION 1: Array implementation with a stack
function validParensArray(s) {
    const open = ["(", "{", "["];
    const close = [")", "}", "]"];
    let bracketStack = [];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            bracketStack.push(s[i]);
        }
        else {
            let whichBracket = close.indexOf(s[i]);
            if (bracketStack.length > 0 && open[whichBracket] == bracketStack.pop()) {
                continue;
            }
            else {
                return false;
            }
        }
    }

    // We made it outside of the loop, need to check if anything is left in the stack
    if (bracketStack.length > 0) {
        return false
    }
    else {
        return true
    };
};

// SOLUTION 2: Hash table with a stack
function validParensHash(s) {
    // Key is the closing parentheses, value is the open: Will use this to check if the stack has the
    // correct corresponding bracket
    const parens = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    let bracketStack = [];

    for (let ch of s) {
        if (parens[ch]) {
            if (bracketStack.length > 0 && parens[ch] == bracketStack.pop()) {
                continue;
            }
            else {
                return false;
            }
        }
        else {
            bracketStack.push(ch);
        }
    }

    // We made it outside of the loop, need to check if anything is left in the stack
    return bracketStack.length == 0;
};

module.exports = { validParensArray, validParensHash };
