const kMaxStringLengths = [
  (1 << 28) - 16,  
  (1 << 29) - 24,  
];

let exception;
for (let length of kMaxStringLengths) {
  let long_string = '"' + new Array(length - 2).join('x');
  try {
    String.prototype.link(long_string);
  } catch (e) {
    exception = e;
    break;
  }
}

print(exception, RangeError, 'Invalid string length');
