






assertThrows("( ({x: 1}) ) => {};", SyntaxError);
assertThrows("( (x) ) => {}", SyntaxError);
assertThrows("( ({x: 1}) = y ) => {}", SyntaxError);
assertThrows("( (x) = y ) => {}", SyntaxError);


assertThrows("let [({x: 1})] = [];", SyntaxError);
assertThrows("let [(x)] = [];", SyntaxError);
assertThrows("let [({x: 1}) = y] = [];", SyntaxError);
assertThrows("let [(x) = y] = [];", SyntaxError);
assertThrows("var [({x: 1})] = [];", SyntaxError);
assertThrows("var [(x)] = [];", SyntaxError);
assertThrows("var [({x: 1}) = y] = [];", SyntaxError);
assertThrows("var [(x) = y] = [];", SyntaxError);


assertThrows("[({x: 1}) = y] = [];", SyntaxError);
assertThrows("({a,b}) = {a:2,b:3}", SyntaxError);



var x;
[(x)] = [2];
assertEquals(x, 2);
[(x) = 3] = [];
assertEquals(x, 3);
