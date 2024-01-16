













function checkSyntax(str) {
  try {
    eval(str);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}

checkSyntax(`function a ([{ catch (e) {
  eval("var e");
} }])`);


checkSyntax(`function a ({
  catch (e) {
  eval("var e");
}})`);
