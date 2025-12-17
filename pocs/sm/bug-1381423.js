var s = new Set(Array(1000).fill(0).map((v, k) => k + 1));
do {
    var n = [...s].length;
    print(n, 1000);
} while (!inIon());
