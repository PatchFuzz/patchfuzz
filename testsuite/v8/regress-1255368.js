






const arr = new Array(20000).fill([1]);
const regexp = RegExp(JSON.stringify(arr));
assertThrows(() => regexp.exec(), SyntaxError, /Regular expression too large/);
