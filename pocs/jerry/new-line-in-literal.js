assert (eval ("'1\\\r\n2'") === '12');

assert (eval ("'1\\\n2'") === '12');
