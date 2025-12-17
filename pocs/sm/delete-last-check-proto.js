var o = {x: 1};
o.y = 2;
Object.setPrototypeOf(o, null);
delete o.y;
print(Object.getPrototypeOf(o), null);
