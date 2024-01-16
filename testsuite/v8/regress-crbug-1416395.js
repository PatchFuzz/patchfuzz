



const re = /(?=.)/giv;
re.lastIndex = 4;
const str = 'f\uD83D\uDCA9ba\u2603';
let result = re[Symbol.split](str, 3);
assertEquals(['f','\uD83D\uDCA9','b'], result);
