





WScript.LoadModule(`import * as mod1 from 'module_1_2645.js';
var ret = mod1.simpleExport();
print(ret === "exported" ? "PASS" : "FAILED");
`);
