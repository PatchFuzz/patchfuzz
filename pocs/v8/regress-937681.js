const str = 'aaaa';

const re0 = /./y;


re0.lastIndex = 9;
print(str, re0[Symbol.replace](str, () => 42));
re0.lastIndex = 9;
print(str, re0[Symbol.replace](str, () => 42));
re0.lastIndex = 9;
print(str, re0[Symbol.replace](str, "42"));
re0.lastIndex = 9;
print(str, re0[Symbol.replace](str, "42"));
