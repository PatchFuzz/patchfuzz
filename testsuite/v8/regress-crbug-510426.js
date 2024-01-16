



var s = new String('a');
s[10000000] = 'bente';
assertEquals(['0', '10000000'], Object.keys(s));
