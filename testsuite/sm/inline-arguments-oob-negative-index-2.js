

function inner(i) {
  
  arguments[i];
  arguments[i];
  arguments[i];
}

function outer(i) {
  trialInline();

  
  for (let j = 0; j < 1; ++j) {
    inner(i);
  }
}

let count = 0;

for (let i = 0; i <= 100; ++i) {
    if (i === 50) {
      Object.defineProperty(Object.prototype, -1, {
        get() {
          count++;
        }
      });
    }
    outer(i < 100 ? i : -1);
}

assertEq(count, 3);
