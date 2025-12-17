var x = {};
oomTest(function() {
  Object();
  for (let i = 0; i < 2; i++) {}
  return Object;
});
