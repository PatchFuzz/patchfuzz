RegExp.prototype.__defineGetter__("global", () => true);
print("/()/g", /()/.toString());
