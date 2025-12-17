Object.defineProperty(this,
                      1,
                      { configurable: true, enumerable: true, value: 3 });
print(3, this[1]);
print(this.hasOwnProperty("1"));
