



var array = Array(1000);
for (var i = 0; i < 100000; ++i) {
    array[i - array.length] = '';
    array[i ^ array.length] = '';
}
