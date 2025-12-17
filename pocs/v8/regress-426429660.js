function __wrapTC(f = true) {
    return f();
}

function __f_1() {
  let [__v_10] = __wrapTC(() => [undefined]);
  return __v_10;
}

print(undefined, __f_1());
print(undefined, __f_1());
