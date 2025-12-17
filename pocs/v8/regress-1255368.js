const arr = new Array(20000).fill([1]);
const regexp = RegExp(JSON.stringify(arr));
print(() => regexp.exec(), SyntaxError, /Regular expression too large/);
