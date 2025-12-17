print("b", "a".replace(/a/, new Proxy(() => "b", {})));
