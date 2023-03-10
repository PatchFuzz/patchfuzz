



print("for(var [x5, functional] = this = function(id) { return id } in false) var x2, x;", SyntaxError);
for(var [x5, functional] = this = function(id) { return id } in false) var x2, x;", SyntaxError);\n^\nReferenceError: print is not defined\n    at /home/b/newpoc/v8/2023-03-02/2019-06-2889d93regress-900585.js:5:1\n\n'*/