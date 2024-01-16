






assertTrue(%HaveSameMap(Object.freeze({}),     Object.freeze({})));
assertTrue(%HaveSameMap(Object.freeze({a: 1}), Object.freeze({a: 1})));
assertTrue(%HaveSameMap(Object.freeze([]),     Object.freeze([])));
assertTrue(%HaveSameMap(Object.freeze([1,2]),  Object.freeze([1,2])));

assertTrue(%HaveSameMap(Object.seal({}),     Object.seal({})));
assertTrue(%HaveSameMap(Object.seal({a: 1}), Object.seal({a: 1})));
assertTrue(%HaveSameMap(Object.seal([]),     Object.seal([])));
assertTrue(%HaveSameMap(Object.seal([1,2]),  Object.seal([1,2])));


assertTrue(%HaveSameMap(Object.freeze({}),     Object.freeze( Object.freeze({}) )));
assertTrue(%HaveSameMap(Object.freeze({a: 1}), Object.freeze( Object.freeze({a: 1}) )));
assertTrue(%HaveSameMap(Object.freeze([]),     Object.freeze( Object.freeze([]) )));
assertTrue(%HaveSameMap(Object.freeze([1,2]),  Object.freeze( Object.freeze([1,2]) )));


assertTrue(%HaveSameMap(Object.seal({}),     Object.seal( Object.seal({}) )));
assertTrue(%HaveSameMap(Object.seal({a: 1}), Object.seal( Object.seal({a: 1}) )));
assertTrue(%HaveSameMap(Object.seal([]),     Object.seal( Object.seal([]) )));
assertTrue(%HaveSameMap(Object.seal([1,2]),  Object.seal( Object.seal([1,2]) )));


assertTrue(%HaveSameMap(Object.freeze({}),     Object.seal( Object.freeze({}) )));
assertTrue(%HaveSameMap(Object.freeze({a: 1}), Object.seal( Object.freeze({a: 1}) )));
assertTrue(%HaveSameMap(Object.freeze([]),     Object.seal( Object.freeze([]) )));
assertTrue(%HaveSameMap(Object.freeze([1,2]),  Object.seal( Object.freeze([1,2]) )));


assertTrue(%HaveSameMap(Object.freeze(Object.seal({})), Object.seal({})));


assertTrue(%HaveSameMap(Object.seal(Object.preventExtensions({})), Object.preventExtensions({})));
