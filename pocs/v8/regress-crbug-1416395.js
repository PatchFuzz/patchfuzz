const re = /(?=.)/giv;
re.lastIndex = 4;
const str = 'f\uD83D\uDCA9ba\u2603';
let result = re[Symbol.split](str, 3);
print(['f','\uD83D\uDCA9','b'], result);
