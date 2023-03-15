



let count = 0
Object.prototype[Symbol.replace] = function () {
  count++
}

"".replace(0);
print(count, 1);

"".replace(0.1);
print(count, 2);
