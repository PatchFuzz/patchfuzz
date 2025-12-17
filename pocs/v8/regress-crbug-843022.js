const fast_regexp_result = /./g.exec("a");
fast_regexp_result.length = 0;
class RegExpWithFastResult extends RegExp {
  constructor() { super(".", "g"); this.number_of_runs = 0; }
  exec(str) { return (this.number_of_runs++ == 0) ? fast_regexp_result : null; }
}


const slow_regexp_result = [];
class RegExpWithSlowResult extends RegExp {
  constructor() { super(".", "g"); this.number_of_runs = 0; }
  exec(str) { return (this.number_of_runs++ == 0) ? slow_regexp_result : null; }
}

print(["undefined"], "a".match(new RegExpWithFastResult()));
print(["undefined"], "a".match(new RegExpWithSlowResult()));
