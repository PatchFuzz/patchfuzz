a = [1.1,2.2,3.3];
a.length = 1;
delete a[1];

print(%HasDoubleElements(a));
print(%HasHoleyElements(a));

delete a[0];

print(%HasDoubleElements(a));
print(%HasHoleyElements(a));
