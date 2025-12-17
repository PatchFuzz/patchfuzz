this.__proto__ = Array.prototype;
Object.freeze(this);
this.length = 1;
print('this.__proto__ = {}');
print(Array.prototype, this.__proto__);
