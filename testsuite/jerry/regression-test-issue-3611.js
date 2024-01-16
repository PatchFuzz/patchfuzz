













var tcs = [
  "for (const [] of $)",
  "for (const [] in $)",
  "for (let [] of $)",
  "for (let [] in $)",
  "for (const {} of $)",
  "for (const {} in $)",
  "for (let {} of $)",
  "for (let {} in $)",
];

for (let e of tcs) {
  try {
    eval (e);
    assert (false);
  } catch (e) {
    assert (e instanceof SyntaxError);
  }

  try {
    eval (e + " {}");
    assert (false);
  } catch (e) {
    assert (e instanceof ReferenceError);
  }
}
