var target = function (x, y) {
    return x + y;
}
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy])
    print(p(2, 3), 5);
