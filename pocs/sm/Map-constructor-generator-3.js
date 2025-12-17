function* none() {
    if (0) yield 0;
}
var m = new Map(none());
print(m.size, 0);
