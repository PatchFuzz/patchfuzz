



test();
function test() {
  schedulegc(100);
  var o = { __proto__: function(){} };
  for (var j = 0; j < 30000; ++j) { try { o.call(3); } catch (e) {  }  }
}
