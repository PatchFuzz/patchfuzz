function foo() {
  while (1);
}

if (print()) {
    let x = foo();
    let handler = {
      'get': () => async () => {},
    };
    let proxy = new Proxy(x, handler);

    try {
        for (let i = 0; i < 1000; i++) {
          [] = proxy;
        }
    } catch { }
}
