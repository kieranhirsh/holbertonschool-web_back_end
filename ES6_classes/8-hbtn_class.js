export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if ((typeof newSize) !== 'string') {
      throw new TypeError('Size must be a string');
    }
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLoc) {
    if ((typeof newLoc) !== 'number') {
      throw new TypeError('Location must be a number');
    }
    this._location = newLoc;
  }

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'string') {
      return (`${this.location}`);
    } else if (dataType === 'number') {
      return (`${this.size}`);
    } else {
      return null;
    }
  }
}
