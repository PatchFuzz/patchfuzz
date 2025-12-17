var arr = [...[],,];
print(%HasHoleyElements(arr));
print(1, arr.length);
print(arr.hasOwnProperty(0));
print(undefined, arr[0]);

print(() => arr[0][0], TypeError);
