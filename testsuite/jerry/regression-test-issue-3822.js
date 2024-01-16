













try {
  eval(`function f ({array, 'a', { value: 'foo', enumerable: true } : 36}){}`);
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

