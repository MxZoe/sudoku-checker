export default class Sudoko{
  constructor(rows){
    this.rows = rows;
  }

  checkRow(index){
    return this.rows[index];
  }
}