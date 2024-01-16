



assertEquals("b", "a".replace(/a/, new Proxy(() => "b", {})));
