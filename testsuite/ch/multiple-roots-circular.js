






WScript.RegisterModuleSource("mod0.js", "print('pass')");
WScript.RegisterModuleSource("mod1.js", "import 'mod2.js';");
WScript.RegisterModuleSource("mod2.js", "import 'mod0.js';");

WScript.LoadScriptFile("mod2.js", "module");
WScript.LoadScriptFile("mod1.js", "module");
