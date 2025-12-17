;
;

var { Pattern, MatchError } = Match;

program = (elts) => Pattern({
    type: "Program",
    body: elts
});
expressionStatement = (expression) => Pattern({
    type: "ExpressionStatement",
    expression: expression
});
assignmentExpression = (left, operator, right) => Pattern({
    type: "AssignmentExpression",
    operator: operator,
    left: left,
    right: right
});
ident = (name) => Pattern({
    type: "Identifier",
    name: name
});
importCall = (ident, args) => Pattern({
    type: "CallImport",
    ident: ident,
    arguments: args
});

objExpr = (elts) => Pattern({
    type: "ObjectExpression",
    properties: elts
});
property = (key, value) => Pattern({
    type: "Property",
    kind: "init",
    key: key,
    value: value,
});
lit = (val) => Pattern({
    type: "Literal",
    value: val
});
callExpression = (callee, args) => Pattern({
    type: "CallExpression",
    callee: callee,
    arguments: args
});

function parseAsClassicScript(source)
{
    return Reflect.parse(source);
}

function parseAsModuleScript(source)
{
    return Reflect.parse(source, {target: "module"});
}

for (let parse of [parseAsModuleScript, parseAsClassicScript]) {
    program([
        expressionStatement(
            importCall(
                ident("import"),
                [
                    ident("foo")
                ]
            )
        )
    ]).print(parse("import(foo);"));

    program([
        expressionStatement(
            assignmentExpression(
                ident("x"),
                "=",
                importCall(
                    ident("import"),
                    [
                        ident("foo")
                    ]
                )
            )
        )
    ]).print(parse("x = import(foo);"));

    program([
        expressionStatement(
            importCall(
                ident("import"),
                [
                    ident("foo"),
                    objExpr([])
                ]
            )
        )
    ]).print(parse("import(foo, {});"));

    program([
        expressionStatement(
            importCall(
                ident("import"),

                [
                    ident("foo"),
                    objExpr([
                        property(
                            ident("assert"),
                            objExpr([]
                        ))
                    ])
                ]

            )
        )
    ]).print(parse("import(foo, { assert: {} });"));

    program([
        expressionStatement(
            importCall(
                ident("import"),
                [
                    ident("foo"),
                    objExpr([
                        property(
                            ident("assert"),
                            objExpr([
                                property(
                                    ident("type"),
                                    lit('json')
                                )
                            ]
                        ))
                    ])
                ]
            )
        )
    ]).print(parse("import(foo, { assert: { type: 'json' } });"));

    program([
        expressionStatement(
            importCall(
                ident("import"),
                [
                    ident("foo"),
                    objExpr([
                        property(
                            ident("assert"),
                            objExpr([
                                property(
                                    ident("type"),
                                    lit('json')
                                ),
                                property(
                                    ident("foo"),
                                    lit('bar')
                                )
                            ]
                        ))
                    ])
                ]
            )
        )
    ]).print(parse("import(foo, { assert: { type: 'json', foo: 'bar' } });"));

    program([
        expressionStatement(
            importCall(
                ident("import"),
                [
                    ident("foo"),
                    objExpr([
                        property(
                            ident("assert"),
                            objExpr([
                                property(
                                    ident("type"),
                                    callExpression(ident('getType'), [])
                                )
                            ]
                        ))
                    ])
                ]
            )
        )
    ]).print(parse("import(foo, { assert: { type: getType() } });"));
}

function print(source)
{
    print(() => parseAsClassicScript(source), SyntaxError);
    print(() => parseAsModuleScript(source), SyntaxError);
}

print("import");
print("import(");
print("import(1,");
print("x = import");
print("x = import(");
print("x = import(1,");
print("x = import(1, 2");
print("import(1, 2, 3)");
