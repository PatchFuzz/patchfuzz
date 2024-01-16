













try {
  Uint8Array.prototype.join.call([ "2015-01-01T00:", { toString : '2,1,3,4,0' } ], [ ]) ;
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
