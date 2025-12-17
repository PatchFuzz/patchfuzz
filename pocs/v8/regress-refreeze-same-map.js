print(%HaveSameMap(Object.freeze({}),     Object.freeze({})));
print(%HaveSameMap(Object.freeze({a: 1}), Object.freeze({a: 1})));
print(%HaveSameMap(Object.freeze([]),     Object.freeze([])));
print(%HaveSameMap(Object.freeze([1,2]),  Object.freeze([1,2])));

print(%HaveSameMap(Object.seal({}),     Object.seal({})));
print(%HaveSameMap(Object.seal({a: 1}), Object.seal({a: 1})));
print(%HaveSameMap(Object.seal([]),     Object.seal([])));
print(%HaveSameMap(Object.seal([1,2]),  Object.seal([1,2])));


print(%HaveSameMap(Object.freeze({}),     Object.freeze( Object.freeze({}) )));
print(%HaveSameMap(Object.freeze({a: 1}), Object.freeze( Object.freeze({a: 1}) )));
print(%HaveSameMap(Object.freeze([]),     Object.freeze( Object.freeze([]) )));
print(%HaveSameMap(Object.freeze([1,2]),  Object.freeze( Object.freeze([1,2]) )));


print(%HaveSameMap(Object.seal({}),     Object.seal( Object.seal({}) )));
print(%HaveSameMap(Object.seal({a: 1}), Object.seal( Object.seal({a: 1}) )));
print(%HaveSameMap(Object.seal([]),     Object.seal( Object.seal([]) )));
print(%HaveSameMap(Object.seal([1,2]),  Object.seal( Object.seal([1,2]) )));


print(%HaveSameMap(Object.freeze({}),     Object.seal( Object.freeze({}) )));
print(%HaveSameMap(Object.freeze({a: 1}), Object.seal( Object.freeze({a: 1}) )));
print(%HaveSameMap(Object.freeze([]),     Object.seal( Object.freeze([]) )));
print(%HaveSameMap(Object.freeze([1,2]),  Object.seal( Object.freeze([1,2]) )));


print(%HaveSameMap(Object.freeze(Object.seal({})), Object.seal({})));


print(%HaveSameMap(Object.seal(Object.preventExtensions({})), Object.preventExtensions({})));
