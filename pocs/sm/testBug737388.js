function one() {};
function two() { print(arguments[0], undefined); }
function three() {
    one("","","","","","");
    two();
}
for (var i = 0; i < 10; ++i)
    three();
