(function() {
  
  const kPageSizeBits = 19;
  const kMaxHeapObjectSize = (1 << (kPageSizeBits - 1));

  const filler = "Large amount of text per element, so that the joined array is"
      + "large enough to be allocated in the large object space"
  const size = Math.ceil(kMaxHeapObjectSize / filler.length + 1);
  const arr = Array(size).fill(filler);

  for (let i = 0; i < 10; i++) {
    print(%InLargeObjectSpace(arr.join("")));
  }

})();
