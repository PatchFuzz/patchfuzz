






try {
  new BigInt64Array(%MaxSmi());
} catch(e) {
  assertInstanceof(e, RangeError);
}
