





assertEquals(0, ((y = (function(a2) { bbbb = a2 }), bbbb = eval('1')) => {y(0); return bbbb})())
assertEquals(0, (({y = (function(a2) { bbbb = a2 }), bbbb = eval('1')} = {}) => {y(0); return bbbb})())
assertEquals(0, (function (y = (function(a2) { bbbb = a2 }), bbbb = eval('1')) {y(0); return bbbb})())
assertEquals(0, (function ({y = (function(a2) { bbbb = a2 }), bbbb = eval('1')} = {}) {y(0); return bbbb})())
