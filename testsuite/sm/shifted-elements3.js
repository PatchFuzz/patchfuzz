
gczeal(12);

function f() {
    var arr = [];
    for (var i = 0; i < 1000; i++)
        arr.push(i);
    gc(); 

    for (var i = 0; i < 10; i++)
        arr.shift();

    
    
    for (var j = 0; j < 40; j++)
        arr[500] = {x: j};
    while (arr.length > 0)
        arr.shift();

    gc();
    return arr;
}
f();
