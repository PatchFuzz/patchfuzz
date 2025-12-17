"use strict";




function* lex(string)
{
    let sourceLineNumber = 0;
    for (let line of string.split("\n")) {
        ++sourceLineNumber;
        
        function consumeWhitespace()
        {
            if (/^\s+/.test(line))
                line = RegExp.rightContext;
        }
   
        function consume(kind)
        {
            line = RegExp.rightContext;
            return {kind, string: RegExp.lastMatch, sourceLineNumber, userLineNumber};
        }
        
        const isIdentifier = /^[a-z_]([a-z0-9_]*)/i;
        const isNumber = /^(([0-9]+(\.([0-9]*))?)|(\.[0-9]+)(e([+-]?)([0-9]+))?)/i;
        const isString = /^\"([^\"]|(\"\"))*\"/;
        const isKeyword = /^((base)|(data)|(def)|(dim)|(end)|(for)|(go)|(gosub)|(goto)|(if)|(input)|(let)|(next)|(on)|(option)|(print)|(randomize)|(read)|(restore)|(return)|(step)|(stop)|(sub)|(then)|(to))/i;
        const isOperator = /^(-|\+|\*|\/|\^|\(|\)|(<[>=]?)|(>=?)|=|,|\$|;)/;
        const isRem = /^rem\s.*/;
        
        consumeWhitespace();
        
        if (!/^[0-9]+/.test(line))
            throw new Error("At line " + sourceLineNumber + ": Expect line number: " + line);
        let userLineNumber = +RegExp.lastMatch;
        line = RegExp.rightContext;
        yield {kind: "userLineNumber", string: RegExp.lastMatch, sourceLineNumber, userLineNumber};
        
        consumeWhitespace();
        
        while (line.length) {
            if (isKeyword.test(line))
                yield consume("keyword");
            else if (isIdentifier.test(line))
                yield consume("identifier");
            else if (isNumber.test(line)) {
                let token = consume("number");
                token.value = +token.string;
                yield token;
            } else if (isString.test(line)) {
                let token = consume("string");
                token.value = "";
                for (let i = 1; i < token.string.length - 1; ++i) {
                    let char = token.string.charAt(i);
                    if (char == "\"")
                        i++;
                    token.value += char;
                }
                yield token;
            } else if (isOperator.test(line))
                yield consume("operator");
            else if (isRem.test(line))
                yield consume("remark");
            else
                throw new Error("At line " + sourceLineNumber + ": Cannot lex token: " + line);
            consumeWhitespace();
        }
        
        
        
        yield {kind: "newLine", string:"\n", sourceLineNumber, userLineNumber};
    }
}
