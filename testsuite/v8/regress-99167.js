




























eval("function Node() { this.a = 1; this.a = 3; }");
new Node;
for (var i = 0; i < 4; ++i) gc();
for (var i = 0; i < 100000; ++i) new Node;
