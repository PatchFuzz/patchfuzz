function f () {
    var x = new Uint8Array(4);
    empty();
    print(x, true);
    var res = inIon();
    bailout();
    return res;
}

function empty() {
}

while(!f());
