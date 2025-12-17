const set_entries = [{}];
set_entries[Symbol.iterator] = function() {};
print(() => new Set(set_entries), TypeError);
print(() => new WeakSet(set_entries), TypeError);

const map_entries = [[{}, 1]];
map_entries[Symbol.iterator] = function() {};
print(() => new Set(map_entries), TypeError);
print(() => new WeakSet(map_entries), TypeError);
