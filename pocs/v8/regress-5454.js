print(function(...[b = !b]) { }, ReferenceError);
print(() => (function([b = !b]) { })([]), ReferenceError);
print(() => (function({b = !b}) { })({}), ReferenceError);

print((...[b = !b]) => { }, ReferenceError);
print(() => (([b = !b]) => { })([]), ReferenceError);
print(() => (({b = !b}) => { })({}), ReferenceError);
