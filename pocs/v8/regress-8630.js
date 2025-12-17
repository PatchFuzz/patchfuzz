print("( ({x: 1}) ) => {};", SyntaxError);
print("( (x) ) => {}", SyntaxError);
print("( ({x: 1}) = y ) => {}", SyntaxError);
print("( (x) = y ) => {}", SyntaxError);


print("let [({x: 1})] = [];", SyntaxError);
print("let [(x)] = [];", SyntaxError);
print("let [({x: 1}) = y] = [];", SyntaxError);
print("let [(x) = y] = [];", SyntaxError);
print("var [({x: 1})] = [];", SyntaxError);
print("var [(x)] = [];", SyntaxError);
print("var [({x: 1}) = y] = [];", SyntaxError);
print("var [(x) = y] = [];", SyntaxError);


print("[({x: 1}) = y] = [];", SyntaxError);
print("({a,b}) = {a:2,b:3}", SyntaxError);



var x;
[(x)] = [2];
print(x, 2);
[(x) = 3] = [];
print(x, 3);
