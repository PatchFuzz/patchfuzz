



(function array_iterator() {
  let array_iterator_prototype = [].values().__proto__;
  let iter;
  array_iterator_prototype.return = function(value) {
    iter = this;
    return {value: value, done: true};
  };

  let array = [["good1"], ["good2"], "bad", "next", 5, 6, 7, 8];

  
  try {
    new WeakSet(array);
  } catch (e) {}
  
  assertEquals(iter.next().value, "next");
})();
