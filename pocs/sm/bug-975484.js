var loc = Reflect.parse("f()").body[0].expression.loc;
print(loc.start.column, 1);
print(loc.end.column, 4);

loc = Reflect.parse("f(x)").body[0].expression.loc;
print(loc.start.column, 1);
print(loc.end.column, 5);
