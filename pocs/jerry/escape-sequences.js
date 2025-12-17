assert ('abcd\
efgh' === 'abcdefgh');

assert ('\'' === "'");
assert ("\'" === "'");
assert ('\"' === '"');
assert ("\"" === '"');

assert ((new String ('\\')).length === 1);
assert ((new String ('\b')).length === 1);
assert ((new String ('\f')).length === 1);
assert ((new String ('\n')).length === 1);
assert ((new String ('\r')).length === 1);
assert ((new String ('\t')).length === 1);
assert ((new String ('\v')).length === 1);


assert ((new String ('\\')).charCodeAt (0) === 92);
assert ((new String ('\b')).charCodeAt (0) === 8);
assert ((new String ('\f')).charCodeAt (0) === 12);
assert ((new String ('\n')).charCodeAt (0) === 10);
assert ((new String ('\r')).charCodeAt (0) === 13);
assert ((new String ('\t')).charCodeAt (0) === 9);
assert ((new String ('\v')).charCodeAt (0) === 11);


assert ('\p' === 'p');

var v\u0061riable = 'valu\u0065';
assert (variable === 'value');
