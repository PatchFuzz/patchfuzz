var s = new String('a');
s[10000000] = 'bente';
print(['0', '10000000'], Object.keys(s));
