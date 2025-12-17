function F() {
  return arguments.length;
}

print(0, F.apply(), "no receiver or args");
print(0, F.apply(this), "no args");
print(0, F.apply(this, []), "empty args");
print(0, F.apply(this, [], 0), "empty args, extra argument");
