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
metaProperty = (meta, property) => Pattern({
    type: "MetaProperty",
    meta: meta,
    property: property
});
memberExpression = (object, property) => Pattern({
    type: "MemberExpression",
    object: object,
    property: property
});

function parseAsModule(source)
{
    return Reflect.parse(source, {target: "module"});
}

program([
    expressionStatement(
        metaProperty(
            ident("import"),
            ident("meta")
        )
    )
]).print(parseAsModule("import.meta;"));

program([
    expressionStatement(
        assignmentExpression(
            ident("x"),
            "=",
            metaProperty(
                ident("import"),
                ident("meta")
            )
        )
    )
]).print(parseAsModule("x = import.meta;"));

program([
    expressionStatement(
        assignmentExpression(
            memberExpression(
                metaProperty(
                    ident("import"),
                    ident("meta")
                ),
                ident("foo")
            ),
            "=",
            ident("x"),
        )
    )
]).print(parseAsModule("import.meta.foo = x;"));

function print(source)
{
    print(() => parseAsModule(source), SyntaxError);
}

print("import");
print("import.");
print("import.met");
print("import.metaa");
print("x = import");
print("x = import.");
print("x = import.met");
print("x = import.metaa");
print("import.meta = x");
