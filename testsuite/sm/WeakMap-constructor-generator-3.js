

function* none() {
    if (0) yield 0;
}
new WeakMap(none());
