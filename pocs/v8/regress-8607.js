print("[({ p: this }), [][0]] = x", SyntaxError);
print("[...a, [][0]] = []", SyntaxError);
print("[...o=1,[][0]] = []", SyntaxError);
print("({x(){},y:[][0]} = {})", SyntaxError);
