const g = newGlobal();
g.enableShellAllocationMetadataBuilder();
function run() {
    const g_load = g.load;
    g_load.toString = run;
    return g_;
}
let caught = false;
try {
  run();
} catch (e) {
  caught = true;
}
print(caught, true);
