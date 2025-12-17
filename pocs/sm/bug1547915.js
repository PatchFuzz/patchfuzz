;

source = `#_\\u200C`;
print(() => eval(source), SyntaxError);
