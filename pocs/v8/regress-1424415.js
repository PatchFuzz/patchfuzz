%SetAllocationTimeout(20, 0, false);

for (let i = 0; i < 10000; ++i) {
  function f() { return i; }
}

%SimulateNewspaceFull();
