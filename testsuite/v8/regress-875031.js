




























var caught = false;
try {
  eval("return;");
  assertTrue(false);  
} catch (e) {
  caught = true;
}
assertTrue(caught);
