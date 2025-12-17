function inner(i) {
  return i in arguments;
}

function outer(i) {
  trialInline();

  
  let r = 0;
  for (let j = 0; j < 1; ++j) {
    r += inner(i,
      
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    );
  }
  return r;
}

let count = 0;

for (let i = 0; i <= 100; ++i) {
    if (i === 50) {
      Object.prototype[-1] = 0;
    }
    count += outer(i < 100 ? i : -1);
}

print(count, 1 + 21);
