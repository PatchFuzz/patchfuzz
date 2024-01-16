





var array = [];
ensureArrayStorage(array);

for (var i = 0; i < 1000; ++i)
    array.push(i);

array.unshift(1, 2, 3, 4); 
