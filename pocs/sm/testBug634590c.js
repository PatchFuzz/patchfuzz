this.name = "outer";
var sb = evalcx('');
sb.name = "inner";
sb.parent = this;
function f() { return this.name; }
f.notMuchTodo = '42';
print(evalcx('(function () {\n' +
                '  arguments = null;\n' + 
                '  var f = parent.f;\n' +
                '  var name = "call";\n' +
                '  return (function () {\n' +
                '    eval(f.notMuchTodo);\n' + 
                '    var s = "";\n' +
                '    for (i = 0; i < 10; ++i)\n' +
                '      s += f();\n' +
                '    return s;\n' +
                '  })();\n' +
                '})()',
                sb),
	 "outerouterouterouterouterouterouterouterouterouter");
