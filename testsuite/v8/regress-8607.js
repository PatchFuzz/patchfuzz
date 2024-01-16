



assertThrows("[({ p: this }), [][0]] = x", SyntaxError);
assertThrows("[...a, [][0]] = []", SyntaxError);
assertThrows("[...o=1,[][0]] = []", SyntaxError);
assertThrows("({x(){},y:[][0]} = {})", SyntaxError);
