function test(x) {
   return (x % x) / -1e-15;
}

for (let v9 = 1; v9 < 25; v9++) {
    print(-0, test(v9));
}
