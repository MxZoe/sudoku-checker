export default class Sudoko{
  constructor(rows){
    this.rows = rows;
    this.reference = [1,2,3,4,5,6,7,8,9]
  }

  checkRow(index){
    if(this.reference == this.rows[index]){
      return true;
    } else {
      return false;
    }
  } 
}