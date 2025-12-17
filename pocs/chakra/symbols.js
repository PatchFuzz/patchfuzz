function test() {
    var o = Object.create(null);

    o[Symbol.iterator] = '[@@iterator]';
    o['string'] = '["string"]';
    o[Symbol('my symbol')] = Symbol('my value');
    o[Symbol('my symbol object')] = Object(Symbol('symobject'));
    o[Symbol('short symbol name')] = Symbol('s');
    o[Symbol('symbol with no name')] = Symbol();

    
}

test();

print("PASSED");
