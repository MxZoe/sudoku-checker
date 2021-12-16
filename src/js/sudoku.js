export default class Sudoko{
  constructor(rows){
    this.rows = rows;
  }

  checkRow(index){
    if(this.rows[index].length === 9){
      return true;
    } else {
      return false;
    }
  } 
  
}