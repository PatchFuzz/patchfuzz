var a = {
    x : 2
};
var b = {
    y : 2
};
b.__proto__ = a;
b; 
print('PASSED');