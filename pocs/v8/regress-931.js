var sequence = '';

var o = { f: function (x, y) { return x + y; },
          2: function (x, y) { return x - y} };

function first() { sequence += "1"; return o; }
function second() { sequence += "2"; return "f"; }
function third() { sequence += "3"; return 3; }
function fourth() { sequence += "4"; return 4; }

var result = (first()[second()](third(), fourth()))
print(7, result);
print("1234", sequence);

function second_prime() { sequence += "2'"; return 2; }

var result = (first()[second_prime()](third(), fourth()))
print(-1, result);
print("123412'34", sequence);
