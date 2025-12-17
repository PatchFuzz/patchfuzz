function testBug504520() {
    
    var arr = [1/0, 1/0, 1/0, 1/0, 1/0, 1/0, 1/0, 1/0, 1/0, 0];
    print(arr.length > 9, true);

    var s = '';
    for (var i = 0; i < arr.length; i++)
        arr[i] >= 1/0 ? null : (s += i);
    print(s, '9');
}
testBug504520();
