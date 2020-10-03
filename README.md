# Problem-1

## Time complexity - O(n\*n)

## Approach - DFS

1. loop through our grid
2. if found first letter of the word, run DFS to find different other characters of word
   1. create temp variable and continue recursion
   2. use recursion to go in all directions, i.e. left, right, bottom, up
   3. if found word, return true
   4. else return false

---

# Problem-2

## Time complexity - O(n)

## Approach - stack

1. create an empty stack
2. create a map with key as left parentheses and value as right parentheses
3. loop over every character of string
4. if stack not empty and value of the key of that map is equal to the character
   1. pop left parentheses out of stack
5. else
   1. push left parentheses to stack
6. return the length of stack (boolean)

---
