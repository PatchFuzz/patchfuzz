;

print(() => {function f([x]){}f(DataView.prototype)}, TypeError);
