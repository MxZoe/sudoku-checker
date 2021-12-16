export default class Sudoko{
  constructor(rows){
    this.rows = rows;
  }

  checkRow(index){
    let arrayToCheck = this.rows[index];
    arrayToCheck.sort();
    if(arrayToCheck !== null && arrayToCheck.length === 9){
        if(arrayToCheck == 1,2,3,4,5,6,7,8,9){
          return true;
        }
    } 
    return false;
  } 
}