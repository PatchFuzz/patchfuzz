



const { revoke } = Proxy.revocable({}, {});
assertEquals("", revoke.name);
