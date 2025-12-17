var goog = goog || {} ;
goog.global = this;
goog.globalEval = function(script) {
  return goog.global.eval(script);
};

print(125, goog.globalEval('var foofoofoo = 125; foofoofoo'));
