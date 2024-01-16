














assert((1 ?? 2) == 1)
assert((0 ?? 2) == 0)
assert(null ?? 2 == 2)
assert(null ?? undefined == undefined)
assert(null ?? undefined ?? 2 == 2)
assert(null ?? undefined ?? null ?? 10  == 10)
assert(null ?? (undefined || null) ?? 10  == 10)
assert(null ?? (undefined && null) ?? 10  == 10)
assert((null ?? true) && (true ?? null) == true)


function poison () {
  throw 23;
}
assert(true ?? poison ())
assert(null ?? null ?? true ?? poison ())

function checkSyntax (str) {
  try {
    eval (str);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }
}


var headNullish1 = "(null ?? null || null )";
var headNullish2 = "(null ?? null && null )";
var tailNullish1 = "(null || null ?? null )";
var tailNullish2 = "(null || null ?? null )";

checkSyntax (headNullish1);
checkSyntax (headNullish2);
checkSyntax (tailNullish1);
checkSyntax (tailNullish2);
