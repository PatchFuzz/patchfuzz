print(() => {
    var desc = {
        element: "anyfunc",
        initial: 1
    };
    var proxy = new Proxy({}, {
        get: true
    });
    Object.setPrototypeOf(desc, proxy);
    let table = new WebAssembly.Table(desc);
}, TypeError, /proxy handler's get trap/);
