function b() { return eval("super.base()") }
try {b()} catch(e) { print(e) } 

