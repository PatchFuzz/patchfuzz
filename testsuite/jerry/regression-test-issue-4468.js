













var str = 'for (let i=0; i<(eval("1; function x() { }; 2;")); x - i++) { x += delete x;}'

var e = eval(str)
assert(e === 'function x() { }true'
       || e === 'function () {  }true');
