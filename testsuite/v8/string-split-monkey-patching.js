





























Array.prototype.push = assertUnreachable;

Object.defineProperty(Array.prototype, "0", {
  get: assertUnreachable,
  set: assertUnreachable });

"-".split(/-/);
"I-must-not-use-push!".split(/-/);
"Oh-no!".split(/(-)/);
"a".split(/(a)|(b)/);
