print(/^[^]*$/v.test('asdf'));
print(/^[^]*$/v.test(''));
print(/^[^]*$/v.test('🤯'));
print(/^(([^]+?)*)$/v.test('asdf'));
print(/^(([^]+?)*)$/v.test(''));
print(/^(([^]+?)*)$/v.test('🤯'));
