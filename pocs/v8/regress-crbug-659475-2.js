var n;

function Ctor() {
  try { } catch (e) {}
  n = new Set();
}

function Check() {
  n.xyz = 0x826852f4;
}

%PrepareFunctionForOptimization(Ctor);
Ctor();
Ctor();
%OptimizeFunctionOnNextCall(Ctor);
Ctor();

%PrepareFunctionForOptimization(Check);
Check();
Check();
%OptimizeFunctionOnNextCall(Check);
Check();

Ctor();
Check();

parseInt('AAAAAAAA');
