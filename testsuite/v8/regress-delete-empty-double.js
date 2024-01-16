




























a = [1.1,2.2,3.3];
a.length = 1;
delete a[1];

assertTrue(%HasDoubleElements(a));
assertFalse(%HasHoleyElements(a));

delete a[0];

assertTrue(%HasDoubleElements(a));
assertTrue(%HasHoleyElements(a));
