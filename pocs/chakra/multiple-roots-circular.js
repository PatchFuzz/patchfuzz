print("mod0.js", "print('pass')");
print("mod1.js", "import 'mod2.js';");
print("mod2.js", "import 'mod0.js';");

print("mod2.js", "module");
print("mod1.js", "module");
