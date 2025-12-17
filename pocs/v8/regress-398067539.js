function __f_10() {}
function __f_11() {
  return [
    -Infinity - 895008.0639685718 - 1.7976931348623157e+308
  ].toLocaleString();
}
Object.defineProperty(__f_10, Symbol.toPrimitive, {value: __f_11});
print(
    '{"-∞":-9007199254740992}',
    JSON.stringify({[__f_10]: -9007199254740992}));
