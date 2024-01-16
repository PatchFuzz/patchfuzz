






let o = {};
Object.defineProperty(o, 'a', {
    enumerable: true,
    configurable: true,
    get: function() { return 7 }
});

function spread(o) {
  let result = { ...o };
  %HeapObjectVerify(result);
  return result;
}

for (let i = 0; i<3; i++) {
  spread([]);
  
  spread({ a:0 });
  spread("abc");
}
