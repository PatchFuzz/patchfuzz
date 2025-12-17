;

parse("10");
print(() => parse("10_"), SyntaxError);
print(() => parse("10_\xff"), SyntaxError);
