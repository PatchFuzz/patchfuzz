;

print(() => Function("do {} while (true) \n /bar/g"), SyntaxError,
                "RegExp in next line should be parsed");
print(() => Function("do {} while (true) /bar/g"), SyntaxError,
                "RegExp in same line should be parsed");
