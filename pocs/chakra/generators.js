function* gf1 () {
    yield 10;
    yield 20;
    yield 30;

    function a() { }
    function b() { }
    function c() { }

    yield a();

    yield b() + (yield c());
}






let g = gf1(); 

g.next(1);
g.next(2);
g.next(3);
g.next(4);
g.next(5);
g.next(6);
g;

function* gf2(p, q) {
    var a = 1;
    yield a; 

    let b = 2;
    yield b; 
}

g = gf2(10, 20);
g.next();
g.next();
g.next();

function* gf3() {
    yield 1;
    yield 2;
    yield 3;
}
function* gf4() {
    yield* gf3();
}

g = gf4(); 

g.next(1);
g.next(2);
g.next(3);

g = gf3(); 
g.next();
g.return(1);

g = gf4(); 

g.next(1);
g.return(2);

function* gf5() {
    try {
        yield 32;
    } catch (e) {
    }
}

g = gf5(); 
g.next();
g.return(1);

print("PASS");
