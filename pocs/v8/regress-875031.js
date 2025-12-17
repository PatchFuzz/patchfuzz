var caught = false;
try {
  eval("return;");
  print(false);  
} catch (e) {
  caught = true;
}
print(caught);
