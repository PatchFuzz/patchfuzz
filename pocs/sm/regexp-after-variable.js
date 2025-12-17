;

print(() => Function("var foo \n /bar/g"), SyntaxError,
                "RegExp in next line should be parsed");
print(() => Function("var foo /bar/g"), SyntaxError,
                       "RegExp in same line should be error");
