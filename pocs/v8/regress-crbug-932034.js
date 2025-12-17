try {
  new BigInt64Array(%MaxSmi());
} catch(e) {
  print(e, RangeError);
}
