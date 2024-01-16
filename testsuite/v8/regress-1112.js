





























Object.defineProperty(this,
                      1,
                      { configurable: true, enumerable: true, value: 3 });
assertEquals(3, this[1]);
assertTrue(this.hasOwnProperty("1"));
