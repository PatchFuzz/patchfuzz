





let ticks = 0;

function v0() {
  try { v1(); } catch {}
  
  try { undefined[null] = null; } catch {}
}

function v1() {
  while (!v0()) {
    
    if (ticks == 5) %OptimizeOsr();
    
    
    
    if (ticks >= 20000) exit(0);
    ticks++;
  }
}

%PrepareFunctionForOptimization(v0);
%PrepareFunctionForOptimization(v1);

v0();
