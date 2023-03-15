;

source = `#_\\u200C`;
assertThrowsInstanceOf(() => eval(source), SyntaxError);
