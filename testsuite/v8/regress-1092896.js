



let count = 0
Object.prototype[Symbol.replace] = function () {
  count++
}

"".replace(0);
assertEquals(count, 1);

"".replace(0.1);
assertEquals(count, 2);
