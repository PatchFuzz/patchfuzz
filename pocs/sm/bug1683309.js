if (helperThreadCount() > 0) {
  evalInWorker(`
  try{
    gczeal(4);
    function f86(depth) {
      var x = async target => ([]);
      o62 = unescape;
      x(o62.prop, o62);
      f86(true + 1);
    }
    f86(0);
  } catch (e) {}
  `);
}
