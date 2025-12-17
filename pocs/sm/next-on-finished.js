function*g(){ };
o = g();
o.next();
result = o.next();
print(result.done, true);
print(o.value, undefined);
