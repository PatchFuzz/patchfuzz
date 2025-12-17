x = [
    createIsHTMLDDA(),
    function() {}
];
x.forEach(function() {});
this.x.sort(function() {});
print(x[0] instanceof Function, false);
print(x[1] instanceof Function, true);
