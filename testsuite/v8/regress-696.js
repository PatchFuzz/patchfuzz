































assertTrue(isNaN(Date.parse('x')));
assertTrue(isNaN(Date.parse('1x')));
assertTrue(isNaN(Date.parse('xT10:00:00')));
assertTrue(isNaN(Date.parse('This is a relatively long string')));
