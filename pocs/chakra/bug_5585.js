print("..\\UnitTestFramework\\UnitTestFramework.js");

let line = 't("摩"2)';
let module_name = 'temp.js';
print(module_name, line);

var tests = [
    {
        name: "Syntax error thrown parsing dynamic module",
        body: function () {
            let source = `import(module_name)
            .then(v => {
                print("Parsing this module should not succeed");
            }, e => {
                print(line, e.source, "Source line causing compile error");
            }).catch(e => {
                print('fail: ' + e);
                throw e;
            });`

            testRunner.LoadModule(source, 'samethread', true, false);
        }
    },
    {
        name: "Syntax error thrown parsing module code",
        body: function () {
            try {
                print(module_name, 'module');
                print("Parsing this module should not succeed");
            } catch(e) {
                print(line, e.source, "Source line causing compile error");
            }
        }
    },
    {
        name: "Error line which contains multi-byte UTF-8 sequence which is an end-of-line character",
        body: function () {
            print('temp2.js', 't("\u2028"2)');

            try {
                print('temp2.js', 'module');
                print("Parsing this module should not succeed");
            } catch(e) {
                print('t("', e.source, "Source line causing compile error");
            }
        }
    }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
