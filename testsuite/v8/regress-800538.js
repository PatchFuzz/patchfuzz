



RegExp.prototype.__defineGetter__("global", () => true);
assertEquals("/()/g", /()/.toString());
