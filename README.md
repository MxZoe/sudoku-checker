Sudoku checker:

goal: take a 9x9 sudoku puzzle and check to make sure it is valid

it is valid when: each row only contains numbers 1-9 with no repeats
                  each column only contains numbers 1-9 with no repeats
                  optional: each 3x3 box only contains numbers 1-9 with no repeats

[
  [1,2,3,4,5,6,7,8,9]
  [9,1,2,3,4,5,6,7,8]
  [8,9,1,2,3,4,5,6,7]
  [7,8,9,1,2,3,4,5,6]
  [6,7,8,9,1,2,3,4,5]
  [5,6,7,8,9,1,2,3,4]
  [4,5,6,7,8,9,1,2,3]
  [3,4,5,6,7,8,9,1,2]
  [2,3,4,5,6,7,8,9,1]
]

Take in a sudoku-puzzle array.
check each row - function(anArray)

<!-- constructing a puzzle object
test to make sure the constructor works
notEmpy()
full() [[9x9]] -->

________
function checkRow(anArray)
check = [1,2,3,4,5,6,7,8,9] 
anArray.sort();
anArray === check;

is it an array?
9 elements
numbers 
numbered 1-9

________
makeColomuns(9x[])


