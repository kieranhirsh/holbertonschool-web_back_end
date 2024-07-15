export default class Building {
  constructor(amount, currency) {
    this.sqft = sqft;
    this.currency = currency;

    if (
      this.constructor === Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  
  get sqft() {
    return this._sqft;
  }

  set sqft(newSq) {
    if ((typeof newSq) !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSq;
  }
}
