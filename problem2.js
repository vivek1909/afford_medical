// Time complexity - O(n)

function validParen(str) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char = 0; char < str.length; char++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === str[char]) {
      stack.pop();
    } else {
      stack.push(str[char]);
    }
  }

  return stack.length === 0;
}

validParen("[]("); // false
validParen("([]())"); // true
