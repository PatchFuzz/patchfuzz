var x = 1; 
print(foo);
print(bar);
switch (x) {
    
    case 1: function foo() { return 'foo'; } break;
    case 2: function bar() { return 'bar'; } break;
}
print(foo);
print(bar);
print('PASSED')
