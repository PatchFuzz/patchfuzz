var dbg1 = new Debugger;
var log1;
function h1(global) {
  log1 += 'n';
  print(global.seen, undefined);
  global.seen = true;
}

var dbg2 = new Debugger;
var log2;
function h2(global) {
  log2 += 'n';
  print(global.seen, undefined);
  global.seen = true;
}

log1 = log2 = '';
newGlobal();
print(log1, '');
print(log2, '');

log1 = log2 = '';
dbg1.onNewGlobalObject = h1;
newGlobal();
print(log1, 'n');
print(log2, '');

log1 = log2 = '';
dbg2.onNewGlobalObject = h2;
newGlobal();
print(log1, 'n');
print(log2, 'n');

log1 = log2 = '';
dbg1.onNewGlobalObject = undefined;
newGlobal();
print(log1, '');
print(log2, 'n');
