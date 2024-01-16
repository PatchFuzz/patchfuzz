



oobArray = [];
for (let i = 0; i < 1e5; ++i) {
  oobArray[i] = 1.1;
}
floatArray = new Float64Array(oobArray.length);
Float64Array.from.call(function(length) {
  oobArray.length = 0;
  return floatArray;
}, oobArray);
