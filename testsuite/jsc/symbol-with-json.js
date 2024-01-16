

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

shouldBe(JSON.stringify(Symbol('Cocoa')), undefined);

var object = {};
var symbol = Symbol("Cocoa");
object[symbol] = 42;
object['Cappuccino'] = 42;
shouldBe(JSON.stringify(object), '{"Cappuccino":42}');

shouldBe(JSON.stringify(object, [ Symbol('Cocoa') ]), "{}");


shouldBe(JSON.stringify({ cocoa: Symbol('Cocoa'), cappuccino: Symbol('Cappuccino') }), '{}');
shouldBe(JSON.stringify({ cocoa: Symbol('Cocoa'), cappuccino: 'cappuccino', [Symbol('Matcha')]: 'matcha' }), '{"cappuccino":"cappuccino"}');
var object = {foo: Symbol()};
object[Symbol()] = 1;
shouldBe(JSON.stringify(object), '{}');


shouldBe(JSON.stringify([ Symbol('Cocoa') ]), '[null]');
shouldBe(JSON.stringify([ "hello", Symbol('Cocoa'), 'world' ]), '["hello",null,"world"]');
var array = [Symbol()];
shouldBe(JSON.stringify(array), '[null]');
