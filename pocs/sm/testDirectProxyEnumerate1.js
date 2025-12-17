;

let {proxy, revoke} = Proxy.revocable({a: 1}, {});

for (let x in proxy)
    print(x, "a")

revoke();

print(function() {
    for (let x in proxy)
        print(true, false);
}, TypeError)
