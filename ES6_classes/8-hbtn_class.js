export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if ((typeof newSize) !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLoc) {
    if ((typeof newLoc) !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = newLoc;
  }

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'string') {
      return (`${this.location}`);
    }
    if (dataType === 'number') {
      return (`${this.size}`);
    }
    return null;
  }
}
