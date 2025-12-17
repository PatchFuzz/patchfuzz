var t = [4];
var stop;
Object.freeze(t);
do {
    stop = inIon();
    t[1] = 2;
    print(t.length, 1);
    print(t[1], undefined);
} while (!stop);
