



assertThrows(() => new RegExp("\\1(\\P{P\0[}()/", "u"), SyntaxError);
