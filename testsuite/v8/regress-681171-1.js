





bar = function() { }

try {
  (function() {
     bar(...(function*(){ yield 1; yield 2; yield 3; })());
   })();
} catch(e) {}
