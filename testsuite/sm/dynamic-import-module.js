

function testImport(path, name, value) {
    let result = null;
    let error = null;
    let promise = import(path);
    promise.then((ns) => {
        result = ns;
    }).catch((e) => {
        error = e;
    });

    drainJobQueue();
    assertEq(error, null);
    assertEq(result[name], value);
}


testImport("module1.js", "a", 1);


testImport("../../modules/module1a.js", "a", 2);


function f() {
    testImport("../../modules/module2.js", "b", 2);
}
f();


eval(`testImport("../../modules/module3.js", "c", 3)`);


const indirect = eval;
const defineTestFunc = testImport.toString();
indirect(defineTestFunc + `testImport("../../modules/module3.js");`);


Function(defineTestFunc + `testImport("../../modules/module3.js");`)();
