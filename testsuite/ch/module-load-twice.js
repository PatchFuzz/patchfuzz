




WScript.RegisterModuleSource('a.js', " ");
WScript.LoadScriptFile('a.js');
WScript.LoadScriptFile('a.js');
WScript.RegisterModuleSource('b.js', "import * as foo from 'a.js'");
WScript.LoadScriptFile('b.js', "module");
WScript.LoadScriptFile('b.js', "module");
print('pass');