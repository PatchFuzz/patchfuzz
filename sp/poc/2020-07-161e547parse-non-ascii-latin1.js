;

parse("10");
assertThrowsInstanceOf(() => parse("10_"), SyntaxError);
assertThrowsInstanceOf(() => parse("10_\xff"), SyntaxError);
