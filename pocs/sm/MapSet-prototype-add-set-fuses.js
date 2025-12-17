print(getFuseState().OptimizeMapPrototypeSetFuse.intact, true);
let v1 = Map.prototype.set;
Map.prototype.set = v1;
print(getFuseState().OptimizeMapPrototypeSetFuse.intact, true);
Map.prototype.set = function() {};
print(getFuseState().OptimizeMapPrototypeSetFuse.intact, false);


print(getFuseState().OptimizeSetPrototypeAddFuse.intact, true);
let v2 = Set.prototype.add;
Set.prototype.add = v2;
print(getFuseState().OptimizeSetPrototypeAddFuse.intact, true);
delete Set.prototype.add;
print(getFuseState().OptimizeSetPrototypeAddFuse.intact, false);


print(getFuseState().OptimizeWeakMapPrototypeSetFuse.intact, true);
let v3 = WeakMap.prototype.set;
WeakMap.prototype.set = v3;
print(getFuseState().OptimizeWeakMapPrototypeSetFuse.intact, true);
WeakMap.prototype.set = function() {};
print(getFuseState().OptimizeWeakMapPrototypeSetFuse.intact, false);


print(getFuseState().OptimizeWeakSetPrototypeAddFuse.intact, true);
let v4 = WeakSet.prototype.add;
WeakSet.prototype.add = v4;
print(getFuseState().OptimizeWeakSetPrototypeAddFuse.intact, true);
delete WeakSet.prototype.add;
print(getFuseState().OptimizeWeakSetPrototypeAddFuse.intact, false);
