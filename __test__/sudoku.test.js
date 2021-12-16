import Sudoku from './../src/js/sudoku.js'

describe(Sudoku, () => {
  let reusablePuzzle;

  beforeEach(() => {
    reusablePuzzle = new Sudoku(
      [[1,2,3,4,5,6,7,8,9],
      [9,1,2,3,4,5,6,7,8],
      [8,9,1,2,3,4,5,6,7],
      [7,8,9,1,2,3,4,5,6],
      [6,7,8,9,1,2,3,4,5],
      [5,6,7,8,9,1,2,3,4],
      [4,5,6,7,8,9,1,2,3],
      [3,4,5,6,7,8,9,1,2],
      [2,3,4,5,6,7,8,9,1]])
  });
  test('should correctly make a sudoku object with 9 rows', () => {
    expect(reusablePuzzle.rows).toEqual(
      [[1,2,3,4,5,6,7,8,9],
      [9,1,2,3,4,5,6,7,8],
      [8,9,1,2,3,4,5,6,7],
      [7,8,9,1,2,3,4,5,6],
      [6,7,8,9,1,2,3,4,5],
      [5,6,7,8,9,1,2,3,4],
      [4,5,6,7,8,9,1,2,3],
      [3,4,5,6,7,8,9,1,2],
      [2,3,4,5,6,7,8,9,1]]);

  });  

  test('should return true if a row from reusablePuzzle.rows of the specificed index is valid', () => {
    expect(reusablePuzzle.checkRow(0)).toEqual(true);
  })

  test("should return true if the row is 9 digits long", () => {
    expect(reusablePuzzle.checkRow(0)).toEqual(true);
  })

  test("should return true if the row matches a reference row", () =>{
    expect(reusablePuzzle.checkRow(0)).toEqual(true);
  })


})
