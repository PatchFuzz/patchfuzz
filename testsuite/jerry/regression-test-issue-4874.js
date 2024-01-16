

















for (let key of ['get', 'set']) {
  try {
    eval(`class { static ${key} #constructor() {} }`);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}
