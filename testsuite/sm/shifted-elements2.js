
gczeal(12);

function f() {
    var arr = [];
    for (var i = 0; i < 1000; i++)
        arr.push(i);
    gc(); 

    
    
    for (var i = 0; i < 20; i++)
        arr.shift();
    for (var i = 0; i < 40; i++)
        arr[900] = {x: i};
    for (var i = 0; i < 10; i++)
        arr.shift();
    gc();

    assertEq(arr[890].x, 39);
}
f();
