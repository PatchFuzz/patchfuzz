%RuntimeEvaluateREPL('let a = 42;');
%RuntimeEvaluateREPL('function read() { ++a; return a; }');
read();
read();
