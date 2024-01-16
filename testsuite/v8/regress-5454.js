



assertThrows(function(...[b = !b]) { }, ReferenceError);
assertThrows(() => (function([b = !b]) { })([]), ReferenceError);
assertThrows(() => (function({b = !b}) { })({}), ReferenceError);

assertThrows((...[b = !b]) => { }, ReferenceError);
assertThrows(() => (([b = !b]) => { })([]), ReferenceError);
assertThrows(() => (({b = !b}) => { })({}), ReferenceError);
