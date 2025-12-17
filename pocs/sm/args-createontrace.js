actual = '';
expected = '5,4,3,2,1,X,5,4,3,2,1,Y,5,4,3,2,1,';

function f() {
  for (var i = 0; i < 5; ++i) {
    var args = arguments;
    print(args[i]);
  }
}

f(5, 4, 3, 2, 1);
print("X");
f(5, 4, 3, 2, 1);
print("Y");
f(5, 4, 3, 2, 1);


print(actual, expected)
