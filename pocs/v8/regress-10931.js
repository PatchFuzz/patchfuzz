const kLargerThanFixedArrayMaxLength = 200_000_000;
var x = new Int8Array(kLargerThanFixedArrayMaxLength);
try {
  var y = x.sort((a, b) => b - a);
} catch (e) {
  
  print(e, TypeError);
  print(
      /not supported for huge TypedArrays/, e.message, 'Error message');
}
