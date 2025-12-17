;
;

var { Pattern, MatchError } = Match;

program = (elts) => Pattern({
    type: "Program",
    body: elts
})
importDeclaration = (specifiers, source) => Pattern({
    type: "ImportDeclaration",
    specifiers: specifiers,
    moduleRequest: source
});
importSpecifier = (id, name) => Pattern({
    type: "ImportSpecifier",
    id: id,
    name: name
});
moduleRequest = (specifier, attributes) => Pattern({
    type: "ModuleRequest",
    source: specifier,
    attributes: attributes
});
importAttribute = (key, value) => Pattern({
    type: "ImportAttribute",
    key: key,
    value : value
});
importNamespaceSpecifier = (name) => Pattern({
  type: "ImportNamespaceSpecifier",
  name: name
});
ident = (name) => Pattern({
    type: "Identifier",
    name: name
})
lit = (val) => Pattern({
    type: "Literal",
    value: val
})

function parseAsModule(source)
{
    return Reflect.parse(source, {target: "module"});
}

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import a from 'b'"));

program([
    importDeclaration(
        [
            importNamespaceSpecifier(
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import * as a from 'b'"));

program([
    importDeclaration(
        [],
        moduleRequest(
            lit("a"),
            []
        )
    )
]).print(parseAsModule("import {} from 'a'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("a"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import { a } from 'b'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("a"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import { a, } from 'b'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("a"),
                ident("b")
            )
        ],
        moduleRequest(
            lit("c"),
            []
        )
    )
]).print(parseAsModule("import { a as b } from 'c'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("as"),
                ident("as")
            )
        ],
        moduleRequest(
            lit("a"),
            []
        )
    )
]).print(parseAsModule("import { as as as } from 'a'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            ),
            importNamespaceSpecifier(
                ident("b")
            )
        ],
        moduleRequest(
            lit("c"),
            []
        )
    )
]).print(parseAsModule("import a, * as b from 'c'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("d")
            )
        ],
        moduleRequest(
            lit("a"),
            []
        )
    )
]).print(parseAsModule("import d, {} from 'a'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("d")
            ),
            importSpecifier(
                ident("a"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import d, { a } from 'b'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("d")
            ),
            importSpecifier(
                ident("a"),
                ident("b")
            )
        ],
        moduleRequest(
            lit("c"),
            []
        )
    )
]).print(parseAsModule("import d, { a as b } from 'c'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("d")
            ),
            importSpecifier(
                ident("a"),
                ident("a")
            ),
            importSpecifier(
                ident("b"),
                ident("b")
            ),
        ],
        moduleRequest(
            lit("c"),
            []
        )
    )
]).print(parseAsModule("import d, { a, b } from 'c'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("d")
            ),
            importSpecifier(
                ident("a"),
                ident("b")
            ),
            importSpecifier(
                ident("c"),
                ident("f")
            ),
        ],
        moduleRequest(
            lit("e"),
            []
        )
    )
]).print(parseAsModule("import d, { a as b, c as f } from 'e'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("true"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import { true as a } from 'b'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("a"),
                ident("a")
            ),
            importSpecifier(
                ident("b"),
                ident("b")
            ),
        ],
        moduleRequest(
            lit("c"),
            []
        )
    )
]).print(parseAsModule("import { a, b } from 'c'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("a"),
                ident("b")
            ),
            importSpecifier(
                ident("c"),
                ident("d")
            ),
        ],
        moduleRequest(
            lit("e"),
            []
        )
    )
]).print(parseAsModule("import { a as b, c as d } from 'e'"));

program([
    importDeclaration(
        [],
        moduleRequest(
            lit("a"),
            []
        )
    )
]).print(parseAsModule("import 'a'"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            []
        )
    )
]).print(parseAsModule("import a from 'b' with {}"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            [
                importAttribute(ident('type'), lit('js')),
            ]
        )
    )
]).print(parseAsModule("import a from 'b' with { type: 'js' }"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            [
                importAttribute(ident('foo'), lit('bar')),
            ]
        )
    )
]).print(parseAsModule("import a from 'b' with { foo: 'bar' }"));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            [
                importAttribute(ident('foo'), lit('bar')),
            ]
        )
    )
]).print(parseAsModule(`import a from 'b' with { foo: 'bar' }`));


program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            [
                importAttribute(ident('foo'), lit('bar')),
            ]
        )
    )
]).print(parseAsModule(`import a from 'b'
                         with { foo: 'bar' }`));

program([
    importDeclaration(
        [
            importSpecifier(
                ident("default"),
                ident("a")
            )
        ],
        moduleRequest(
            lit("b"),
            [
                importAttribute(ident('type'), lit('js')),
                importAttribute(ident('foo'), lit('bar')),
            ]
        )
    )
]).print(parseAsModule("import a from 'b' with { type: 'js', foo: 'bar' }"));

print(function () {
    parseAsModule("import a from 'b' with { type: type }");
}, SyntaxError);

var loc = parseAsModule("import { a as b } from 'c'", {
    loc: true
}).body[0].loc;

print(loc.start.line, 1);
print(loc.start.column, 1);
print(loc.start.line, 1);
print(loc.end.column, 27);

print(function () {
   parseAsModule("function f() { import a from 'b' }");
}, SyntaxError);

print(function () {
   parseAsModule("if (true) import a from 'b'");
}, SyntaxError);

print(function() {
    parseAsModule("import {");
}, SyntaxError);

print(function() {
    parseAsModule("import {}");
}, SyntaxError);

print(function() {
    parseAsModule("import {} from");
}, SyntaxError);

print(function() {
    parseAsModule("import {,} from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import { a as true } from 'b'");
}, SyntaxError);

print(function() {
    parseAsModule("import { true } from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import a,");
}, SyntaxError);

print(function() {
    parseAsModule("import a, b from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import * as a,");
}, SyntaxError);

print(function() {
    parseAsModule("import * as a, {} from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import as a from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import * a from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import * as from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import , {} from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import d, from 'a'");
}, SyntaxError);

print(function() {
    parseAsModule("import * as true from 'b'");
}, SyntaxError);
