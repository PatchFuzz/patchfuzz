;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

print(() => {
  dbg.memory.takeCensus({
    breakdown: { get by() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'count', get count() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'count', get bytes() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'objectClass', get then() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'objectClass', get other() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get objects() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get scripts() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get strings() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");

print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'coarseType', get other() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");



print(() => {
  dbg.memory.takeCensus({
    breakdown: { by: 'internalType', get then() { throw "ಠ_ಠ" } }
  });
}, "ಠ_ಠ");
