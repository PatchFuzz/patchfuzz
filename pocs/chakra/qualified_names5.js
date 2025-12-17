var obj = {};
var x = 2;
obj[1] = function () {
x;
x;      
};
obj[x] = function () {
x;
x;      
};

obj[1+3] = function () {
x;
x;      
};
obj[3.4456] = function () {
x;
x;      
};

obj[1]();
obj[2]();
obj[4]();
obj["3.4456"]();
print("Pass");
