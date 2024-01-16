




























var undetectable = %GetUndetectable();


assertTrue(typeof 0 == 'number');
assertTrue(typeof 0 === 'number');
assertFalse(typeof 0 != 'number');
assertFalse(typeof 0 !== 'number');
assertTrue(typeof 1.2 == 'number');
assertTrue(typeof 1.2 === 'number');
assertFalse(typeof 1.2 != 'number');
assertFalse(typeof 1.2 !== 'number');
assertTrue(typeof 'x' != 'number');
assertTrue(typeof 'x' !== 'number');
assertFalse(typeof 'x' == 'number');
assertFalse(typeof 'x' === 'number');
assertTrue(typeof Object() != 'number');
assertTrue(typeof Object() !== 'number');
assertFalse(typeof Object() == 'number');
assertFalse(typeof Object() === 'number');


assertTrue(typeof 'x' == 'string');
assertTrue(typeof 'x' === 'string');
assertFalse(typeof 'x' != 'string');
assertFalse(typeof 'x' !== 'string');
assertTrue(typeof ('x' + 'x') == 'string');
assertTrue(typeof ('x' + 'x') === 'string');
assertFalse(typeof ('x' + 'x') != 'string');
assertFalse(typeof ('x' + 'x') !== 'string');
assertTrue(typeof 1 != 'string');
assertTrue(typeof 1 !== 'string');
assertFalse(typeof 1 == 'string');
assertFalse(typeof 1 === 'string');
assertTrue(typeof Object() != 'string');
assertTrue(typeof Object() !== 'string');
assertFalse(typeof Object() == 'string');
assertFalse(typeof Object() === 'string');


assertTrue(typeof true == 'boolean');
assertTrue(typeof true === 'boolean');
assertFalse(typeof true != 'boolean');
assertFalse(typeof true !== 'boolean');
assertTrue(typeof false == 'boolean');
assertTrue(typeof false === 'boolean');
assertFalse(typeof false != 'boolean');
assertFalse(typeof false !== 'boolean');
assertTrue(typeof 1 != 'boolean');
assertTrue(typeof 1 !== 'boolean');
assertFalse(typeof 1 == 'boolean');
assertFalse(typeof 1 === 'boolean');
assertTrue(typeof 'x' != 'boolean');
assertTrue(typeof 'x' !== 'boolean');
assertFalse(typeof 'x' == 'boolean');
assertFalse(typeof 'x' === 'boolean');
assertTrue(typeof Object() != 'boolean');
assertTrue(typeof Object() !== 'boolean');
assertFalse(typeof Object() == 'boolean');
assertFalse(typeof Object() === 'boolean');


assertTrue(typeof void 0 == 'undefined');
assertTrue(typeof void 0 === 'undefined');
assertFalse(typeof void 0 != 'undefined');
assertFalse(typeof void 0 !== 'undefined');
assertTrue(typeof 1 != 'undefined');
assertTrue(typeof 1 !== 'undefined');
assertFalse(typeof 1 == 'undefined');
assertFalse(typeof 1 === 'undefined');
assertTrue(typeof null != 'undefined');
assertTrue(typeof null !== 'undefined');
assertFalse(typeof null == 'undefined');
assertFalse(typeof null === 'undefined');
assertTrue(typeof Object() != 'undefined');
assertTrue(typeof Object() !== 'undefined');
assertFalse(typeof Object() == 'undefined');
assertFalse(typeof Object() === 'undefined');
assertTrue(typeof undetectable == 'undefined');
assertTrue(typeof undetectable === 'undefined');
assertFalse(typeof undetectable != 'undefined');
assertFalse(typeof undetectable !== 'undefined');


assertTrue(typeof Object == 'function');
assertTrue(typeof Object === 'function');
assertFalse(typeof Object != 'function');
assertFalse(typeof Object !== 'function');
assertTrue(typeof 1 != 'function');
assertTrue(typeof 1 !== 'function');
assertFalse(typeof 1 == 'function');
assertFalse(typeof 1 === 'function');
assertTrue(typeof Object() != 'function');
assertTrue(typeof Object() !== 'function');
assertFalse(typeof Object() == 'function');
assertFalse(typeof Object() === 'function');
assertTrue(typeof undetectable != 'function');
assertTrue(typeof undetectable !== 'function');
assertFalse(typeof undetectable == 'function');
assertFalse(typeof undetectable === 'function');


assertTrue(typeof Object() == 'object');
assertTrue(typeof Object() === 'object');
assertFalse(typeof Object() != 'object');
assertFalse(typeof Object() !== 'object');
assertTrue(typeof new String('x') == 'object');
assertTrue(typeof new String('x') === 'object');
assertFalse(typeof new String('x') != 'object');
assertFalse(typeof new String('x') !== 'object');
assertTrue(typeof ['x'] == 'object');
assertTrue(typeof ['x'] === 'object');
assertFalse(typeof ['x'] != 'object');
assertFalse(typeof ['x'] !== 'object');
assertTrue(typeof null == 'object');
assertTrue(typeof null === 'object');
assertFalse(typeof null != 'object');
assertFalse(typeof null !== 'object');
assertTrue(typeof 1 != 'object');
assertTrue(typeof 1 !== 'object');
assertFalse(typeof 1 == 'object');
assertFalse(typeof 1 === 'object');
assertTrue(typeof 'x' != 'object');
assertTrue(typeof 'x' !== 'object');
assertFalse(typeof 'x' == 'object');  
assertFalse(typeof 'x' === 'object');
assertTrue(typeof Object != 'object');
assertTrue(typeof Object !== 'object');
assertFalse(typeof Object == 'object');
assertFalse(typeof Object === 'object');
assertTrue(typeof undetectable != 'object');
assertTrue(typeof undetectable !== 'object');
assertFalse(typeof undetectable == 'object');
assertFalse(typeof undetectable === 'object');
