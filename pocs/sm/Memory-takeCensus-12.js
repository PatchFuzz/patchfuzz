var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

var bucket = { by: "bucket" };
var count = { by: "count", count: true, bytes: false };

var all = dbg.memory.takeCensus({ breakdown: bucket });
var allCount = dbg.memory.takeCensus({ breakdown: count }).count;

var coarse = dbg.memory.takeCensus({
  breakdown: {
    by: "coarseType",
    objects: bucket,
    strings: bucket,
    scripts: bucket,
    other: bucket
  }
});
var coarseCount = dbg.memory.takeCensus({
  breakdown: {
    by: "coarseType",
    objects: count,
    strings: count,
    scripts: count,
    other: count
  }
});

print(all.length > 0, true);
print(all.length, allCount);

print(coarse.objects.length > 0, true);
print(coarseCount.objects.count, coarse.objects.length);

print(coarse.strings.length > 0, true);
print(coarseCount.strings.count, coarse.strings.length);

print(coarse.scripts.length > 0, true);
print(coarseCount.scripts.count, coarse.scripts.length);

print(coarse.other.length > 0, true);
print(coarseCount.other.count, coarse.other.length);

print(all.length >= coarse.objects.length, true);
print(all.length >= coarse.strings.length, true);
print(all.length >= coarse.scripts.length, true);
print(all.length >= coarse.other.length, true);

function print(id) {
  print(id, Math.floor(id));
  print(id > 0, true);
  print(id <= Math.pow(2, 48), true);
}

all.forEach(assertIsIdentifier);
coarse.objects.forEach(assertIsIdentifier);
coarse.strings.forEach(assertIsIdentifier);
coarse.scripts.forEach(assertIsIdentifier);
coarse.other.forEach(assertIsIdentifier);
