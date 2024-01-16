













class C1 { async }
class C2 { async; constructor() {} }
class C3 { async = 5.1; constructor() {} }

assert((new C1).async === undefined);
assert((new C2).async === undefined);
assert((new C3).async === 5.1);

try {
  eval('class C1 { async* }');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

