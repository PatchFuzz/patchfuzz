




function write(v) { WScript.Echo(v + ""); }

var scenario = [
    ["Assign to Arguments", "arguments=1"],
    ["Post ++   Arguments", "arguments++"],
    ["Post --   Arguments", "arguments--"],
    ["Pre  ++   Arguments", "++arguments"],
    ["Pre  --   Arguments", "--arguments"]
];

var count = 0;

(function test1() {
    write("Changing Arguments...");

    for (var i=0;i<scenario.length;++i) {
        var str = "function f" + i + "() { 'use strict'; " + scenario[i][1] + "; }";
        try {
            eval(str);
        } catch (e) {
            write("Exception: " + str + " :: " + scenario[i][0]);
            continue;
        }
        write("Return: " + str + " :: " + scenario[i][0]);
    }
})();
