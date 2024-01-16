



this.__proto__ = Array.prototype;
Object.freeze(this);
this.length = 1;
assertThrows('this.__proto__ = {}');
assertEquals(Array.prototype, this.__proto__);
