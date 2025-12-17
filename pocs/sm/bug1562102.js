oomTest(
  function() {
    evaluate(`
class C {
  c;
}
`, {
  compileAndGo: true
});
  }
)
