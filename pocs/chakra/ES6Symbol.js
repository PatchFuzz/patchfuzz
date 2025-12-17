print("..\\UnitTestFramework\\UnitTestFramework.js");

function VerifyToPropertyKey(key) {
    var obj = {};

    print(obj.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
    print(function() { Object.defineProperty(obj, key, { value: 'something', enumerable: true }); }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");

    print(obj.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
    print(obj.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
    print(undefined, Object.getOwnPropertyDescriptor(obj, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");

    obj = {};
    obj.__defineGetter__(key, () => { return 2;} );
    print(obj.hasOwnProperty(key), "Object#__defineGetter__ uses ToPropertyKey. Property is added to the object");

    obj = {};
    obj.__defineSetter__(key, () => { return 2;} );
    print(obj.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");

    var count = 0;
    obj = Object.defineProperty({}, key, { set(v) { print('abc', v, "Setter called with correct arg"); count++; } });
    var set = obj.__lookupSetter__(key);
    print('function', typeof set, "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
    set('abc');
    print(1, count, "Correct setter was called.");

    obj = Object.defineProperty({}, key, { get() { return 'abc'; } });
    var get = obj.__lookupGetter__(key);
    print('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
    print('abc', get(), "Correct getter was called.");

    obj = {};
    print(function() { Reflect.set(obj, key, 'abc'); }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
    print('abc', Reflect.get(obj, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    print(Reflect.deleteProperty(obj, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
    print(Reflect.has(obj, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
    print(function() { Reflect.defineProperty(obj, key, { value: 'def', enumerable: true }); }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
    print('def', Reflect.get(obj, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    print(undefined, Reflect.getOwnPropertyDescriptor(obj, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");

    obj = {};
    print(function() { obj[key] = 123; }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
    print(123, obj[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
    print(obj.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}

var tests = [
    {
        name: "Symbol is a constructor object and has correct shape",
        body: function () {
            print(Symbol !== undefined, "Symbol is defined");
            print('function', typeof Symbol, "typeof Symbol === 'function'");
            print(0, Symbol.length, "Symbol.length === 0");

            print('function', typeof Symbol.toString, "typeof Symbol.toString === 'function'");
            print('function', typeof Symbol.valueOf, "typeof Symbol.valueOf === 'function'");

            print('function', typeof Symbol.for, "typeof Symbol.for === 'function'");
            print(1, Symbol.for.length, "Symbol.for.length === 1");
            descriptor = Object.getOwnPropertyDescriptor(Symbol, 'for');
            print(descriptor.writable, 'Symbol.for.descriptor.writable == true');
            print(descriptor.enumerable, 'Symbol.for.descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.for.descriptor.configurable == true');

            print('function', typeof Symbol.keyFor, "typeof Symbol.keyFor === 'function'");
            print(1, Symbol.keyFor.length, "Symbol.keyFor.length === 1");
            descriptor = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
            print(descriptor.writable, 'Symbol.keyFor.descriptor.writable == true');
            print(descriptor.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.keyFor.descriptor.configurable == true');
        }
    },
    {
        name: "Symbol prototype has expected shape",
        body: function() {
            print(Symbol === Symbol.prototype.constructor, "Symbol === Symbol.prototype.constructor");
            descriptor = Object.getOwnPropertyDescriptor(Symbol, 'prototype');

            print(descriptor.writable, 'Symbol.prototype.descriptor.writable == false');
            print(descriptor.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.prototype.descriptor.configurable == false');

            print('function', typeof Symbol.prototype.toString, "typeof Symbol.prototype.toString === 'function'");
            descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');

            print(descriptor.writable, 'Symbol.prototype.toString.descriptor.writable == true');
            print(descriptor.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');

            print('function', typeof Symbol.prototype.valueOf, "typeof Symbol.prototype.valueOf === 'function'");
            descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');

            print(descriptor.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
            print(descriptor.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');

            print('function', typeof Symbol.prototype[Symbol.toPrimitive], "typeof Symbol.prototype[@@toPrimitive] === 'function'");
            print(1, Symbol.prototype[Symbol.toPrimitive].length, "Symbol.prototype[@@toPrimitive].length === 1");
            descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);

            print(descriptor.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
            print(descriptor.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');

            var functionToString = Symbol.prototype[Symbol.toPrimitive].toString();
            var actualName = functionToString.substring(9, functionToString.indexOf('('));
            print('[Symbol.toPrimitive]', actualName, "Symbol[@@toPrimitive].name == '[Symbol.toPrimitive]'");

            print('string', typeof Symbol.prototype[Symbol.toStringTag], "typeof Symbol.prototype[@@toStringTag] === 'string'");
            descriptor = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);

            print(descriptor.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
            print(descriptor.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
            print(descriptor.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
            print('Symbol', Symbol.prototype[Symbol.toStringTag], "Symbol.prototype[@@toStringTag] === 'Symbol'");
        }
    },
    {
        name: "Symbol constructor and prototype built-ins",
        body: function() {
            var x = Symbol("x");
            var y = Symbol("y");

            
            print(x, x[Symbol.toPrimitive](), "x == x[Symbol.toPrimitive]()");
            print(x, x[Symbol.toPrimitive].call(x), "x == x[Symbol.toPrimitive].call(x)");
            print(y, x[Symbol.toPrimitive].call(y), "y == x[Symbol.toPrimitive].call(y)");
            print(x == x[Symbol.toPrimitive].call(y), "x != x[Symbol.toPrimitive].call(y)");
            print(x, Symbol.prototype[Symbol.toPrimitive].call(x), "x == Symbol.prototype[Symbol.toPrimitive].call(x)");

            
            print(function () { x[Symbol.toPrimitive].call("x") }, TypeError, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive]() }, TypeError, "toPrimitive throws TypeError if no arguments are passed", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(true) }, TypeError, "toPrimitive throws TypeError for boolean true", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(false) }, TypeError, "toPrimitive throws TypeError for boolean false", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(0) }, TypeError, "toPrimitive throws TypeError for number", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(NaN) }, TypeError, "toPrimitive throws TypeError for NaN", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call("") }, TypeError, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call("abc") }, TypeError, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(null) }, TypeError, "toPrimitive throws TypeError for null", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call(undefined) }, TypeError, "toPrimitive throws TypeError for undefined", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            print(function () { Symbol.prototype[Symbol.toPrimitive].call({}) }, TypeError, "toPrimitive throws TypeError for object", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");

            var z = Object(y);
            print(y, Symbol.prototype[Symbol.toPrimitive].call(z), "y == Symbol.prototype[Symbol.toPrimitive].call(z)");
            print(Object(x) == Symbol.prototype[Symbol.toPrimitive].call(z), "Object(x) != Symbol.prototype[Symbol.toPrimitive].call(z)");
        }
    },
    {
        name: "Symbol constructor has the well-known symbols as properties",
        body: function() {
            function verifySymbol(propertyName) {
                var fullName = "Symbol[" + propertyName + "]";

                print(Symbol[propertyName] !== undefined,  fullName + " !== undefined");
                print('symbol', typeof Symbol[propertyName], "typeof " + fullName + " === 'symbol'");

                var descriptor = Object.getOwnPropertyDescriptor(Symbol, propertyName);
                print(descriptor.writable, fullName + '.descriptor.writable == false');
                print(descriptor.enumerable, fullName + 'descriptor.enumerable == false');
                print(descriptor.configurable, fullName + 'descriptor.configurable == false');
            }

            verifySymbol("hasInstance");
            verifySymbol("isConcatSpreadable");
            verifySymbol("iterator");
            verifySymbol("toPrimitive");
            verifySymbol("toStringTag");
            verifySymbol("unscopables");
            verifySymbol("species");
            verifySymbol("replace");
            verifySymbol("search");
            verifySymbol("match");
            verifySymbol("split");
        }
    },
    {
        name: "Symbol primitive toString should throw a type error",
        body: function() {
            print(function() { 'string' + Symbol.iterator; }, TypeError, "Symbol primitives throw on implicit string conversion", "No implicit conversion of Symbol to String");
        }
    },
    {
        name: "String(symbol) behavior",
        body: function() {
            print('Symbol(description)', String(Symbol('description')), "String(Symbol('description')) === 'Symbol(description)'");
            print(function () { new String(Symbol('description')); }, TypeError, "Symbol as an argument to new String() throws", "No implicit conversion of Symbol to String");
        }
    },
    {
        name: "Symbol object toString produces a human-readable name",
        body: function() {
            print('Symbol(Symbol.hasInstance)', Object(Symbol.hasInstance).toString(), "Object(Symbol.hasInstance).toString() === 'Symbol(Symbol.hasInstance)'");
            print('Symbol(Symbol.isConcatSpreadable)', Object(Symbol.isConcatSpreadable).toString(), "Object(Symbol.isConcatSpreadable).toString() === 'Symbol(Symbol.isConcatSpreadable)'");
            print('Symbol(Symbol.iterator)', Object(Symbol.iterator).toString(), "Object(Symbol.iterator).toString() === 'Symbol(Symbol.iterator)'");
            print('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString(), "Object(Symbol.toPrimitive).toString() === 'Symbol(Symbol.toPrimitive)'");
            print('Symbol(Symbol.toStringTag)', Object(Symbol.toStringTag).toString(), "Object(Symbol.toStringTag).toString() === 'Symbol(Symbol.toStringTag)'");
            print('Symbol(Symbol.unscopables)', Object(Symbol.unscopables).toString(), "Object(Symbol.unscopables).toString() === 'Symbol(Symbol.unscopables)'");

            print('Symbol()', Object(Symbol()).toString(), "Object(Symbol()).toString() === 'Symbol()'");
            print("Symbol(Some kind of long string description\n\n)", Object(Symbol("Some kind of long string description\n\n")).toString(), "Object(Symbol(\"Some kind of long string description\n\n\")).toString() === 'Symbol(Some kind of long string description\n\n)'");
        }
    },
    {
        name: "typeof a symbol primitive is 'symbol'",
        body: function() {
            print('symbol', typeof Symbol('mysymbol'), "typeof Symbol('mysymbol') === 'symbol'");
            print('symbol', typeof Symbol(''), "typeof Symbol('') === 'symbol'");
            print('symbol', typeof Symbol(), "typeof Symbol() === 'symbol'");
        }
    },
    {
        name: "new Symbol throws",
        body: function() {
            print(function () { new Symbol() }, TypeError, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
            print(function () { new Symbol('anything') }, TypeError, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
        }
    },
    {
        name: "Symbols with single-character descriptions (these are special-cased in ThreadContext)",
        body: function() {
            print(Symbol('s') !== Symbol('s'), "We are able to create multiple symbols with the same single-character description and they are not equal");
        }
    },
    {
        name: "Symbol strict equality with other symbols",
        body: function() {
            print(Symbol('something') !== Symbol('something'), "Symbol('something') !== Symbol('something')");
            print(Symbol('') !== Symbol(''), "Symbol('') !== Symbol('')");
            print(Symbol() !== Symbol(), "Symbol() !== Symbol()");

            var my1 = Symbol('my');
            print(my1 === my1, "Generated symbol should equal itself");
            var my2 = my1;
            print(my1 === my2, "Assignment to another Var should still equal the original symbol");

            var o1 = Object(my1);
            var o2 = Object(my1);
            print(o1 !== o2, "Box objects should not be equal for the same symbol");
            print(o1 !== my1, "Box object should not be equal to the symbol primitive");
            print(o1.valueOf() === o2.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");

            var o3 = Object(Symbol('another'));
            print(o1 !== o3, "Box objects should not be equal for different symbol primitives");

            var my3 = o1.valueOf();
            print(my1 === my3, "Unboxed symbol should be equal to original primitive");

            print(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");

            print(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
        }
    },
    {
        name: "Symbol strict equality with other types",
        body: function() {
            var sym = Symbol('my');

            print(sym === 'string', "sym !== 'string'");
            print(sym === undefined, "sym !== undefined");
            print(sym === null, "sym !== null");
            print(sym === true, "sym !== true");
            print(sym === false, "sym !== true");
            print(sym === [], "sym !== []");
            print(sym === {}, "sym !== {}");
            print(sym === sym, "sym === sym");

            print('string' === sym, "'string' !== sym");
            print(undefined === sym, "undefined !== sym");
            print(null === sym, "null !== sym");
            print(true === sym, "true !== sym");
            print(false === sym, "false !== sym");
            print([] === sym, "[] !== sym");
            print({} === sym, "{} !== sym");
        }
    },
    {
        name: "Symbol equality with other types",
        body: function() {
            var sym = Symbol('my');

            print(sym == 'string', "ToString(symbol) throws so this should be false");
            print(sym == undefined, "sym != undefined");
            print(sym == null, "sym != null");
            print(sym == true, "symbol != true");
            print(sym == false, "symbol != false");
            print(sym == [], "sym != []");
            print(sym == {}, "sym != {}");
            print(sym == sym, "sym == sym");

            print('string' == sym, "ToString(symbol) throws so this should be false");
            print(undefined == sym, "undefined != sym");
            print(null == sym, "null != sym");
            print(true == sym, "true != sym");
            print(false == sym, "false != sym");
            print([] == sym, "[] != sym");
            print({} == sym, "{} != sym");
        }
    },
    {
        name: "Symbol equality with auto-boxed Symbols",
        body: function() {
            var sym = Symbol('my');

            print(sym == Object(sym), "Auto-boxed symbol is equal to that symbol");
            print(Object(sym) == sym, "Auto-boxed symbol is equal to that symbol");
            print(Object(sym) == Object(sym), "Two different auto-boxed symbols of the same symbol are never equal to each other");

            print(sym === Object(sym), "Auto-boxed symbol is not strict-equal to that symbol");
            print(Object(sym) === sym, "Auto-boxed symbol is not strict-equal to that symbol");
            print(Object(sym) === Object(sym), "Two different auto-boxed symbols of the same symbol are never strict-equal to each other");
        }
    },
    {
        name: "Symbol auto-boxing",
        body: function() {
            print('Symbol()', Symbol().toString(), "Autoboxing for toString()");

            var sym = Symbol();

            print(sym.valueOf() === sym.valueOf(), "Autoboxing for valueOf()");
        }
    },
    {
        name: "Symbol primitives work as property keys",
        body: function() {
            var o = {};
            o[Symbol.iterator] = 'some string';
            print('some string', o[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
            print(o[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");

            
            function getProperty(obj, sym) {
                return obj[sym];
            }
            function setProperty(obj, sym, val) {
                obj[sym] = val;
            }

            o = {};
            var my = Symbol();
            for (var i = 0; i < 5; i++) {
                setProperty(o, my, i);
                print(i, getProperty(o, my), "Property keyed by symbol is able to be set and get");
            }

            var sym = Symbol('sym');
            o = {};
            o[sym] = 'test';

            print('test', o[sym], "Symbol converted to property key works");
            print(undefined, o['sym'], "Symbol description is not added as a property to the object");

            var s1 = Symbol('uniquevalue');
            var s2 = Symbol('uniquevalue');
            o = {};
            o[s1] = 's1';
            o[s2] = 's2';

            print('s1', o[s1], "Simple test of symbol producing a property on an object");
            print('s2', o[s2], "Simple test of symbol producing a property on an object");
            print(o[s1] != o[s2], "Different symbols with the same description create different properties on an object");

            delete o[s1];

            print(undefined, o[s1], "deleting properties from objects also works");
            print('s2', o[s2], "deleting a property doesn't affect other properties");

            
            o = { [sym] : 'string' };
            print('string', o[sym], "Object literal declared with symbol property works");
        }
    },
    {
        name: "Object.prototype.hasOwnProperty works for symbols",
        body: function() {
            var o = {};

            print(o.hasOwnProperty(Symbol.iterator), "Property defined with a symbol initially is not in the object");

            o[Symbol.iterator] = 'a string';

            print(o.hasOwnProperty(Symbol.iterator), "Property defined with a symbol can be looked up via o.hasOwnProperty");
        }
    },
    {
        name: "Symbols handled by type conversion operations",
        body: function() {
            print(function () { Number(Symbol.iterator).valueOf() }, TypeError, "ToNumber(symbol) throws TypeError", "Number expected");
            print(true, Boolean(Symbol.iterator), "ToBoolean(symbol) === true");
            print('object', typeof Object(Symbol.iterator), "ToObject(symbol) is not a symbol object");
        }
    },
    {
        name: "API shape of Object.getOwnPropertySymbols",
        body: function() {
            print(Object.getOwnPropertySymbols !== undefined, "Object.getOwnPropertySymbols is defined");
            print('function', typeof Object.getOwnPropertySymbols, "Object.getOwnPropertySymbols is a function");
            print(1, Object.getOwnPropertySymbols.length, "Object.getOwnPropertySymbols.length === 1");
        }
    },
    {
        name: "Object.getOwnPropertySymbols does ToObject on its argument",
        body: function() {
            print(function () { Object.getOwnPropertySymbols(); }, TypeError, "ToObject(undefined) throws TypeError", "Object expected");
            print(function () { Object.getOwnPropertySymbols(undefined); }, TypeError, "ToObject(undefined) throws TypeError", "Object expected");
            print(function () { Object.getOwnPropertySymbols(null); }, TypeError, "ToObject(null) throws TypeError", "Object expected");
            print([], Object.getOwnPropertySymbols(true), "Object.getOwnPropertySymbols does ToObject on boolean");
            print([], Object.getOwnPropertySymbols(1), "Object.getOwnPropertySymbols does ToObject on number");
            print([], Object.getOwnPropertySymbols("a"), "Object.getOwnPropertySymbols does ToObject on string");
            print([], Object.getOwnPropertySymbols(Symbol('a')), "Object.getOwnPropertySymbols does ToObject on symbol");
            print([], Object.getOwnPropertySymbols({}), "Object.getOwnPropertySymbols returns an empty array for an empty object");
        }
    },
    {
        name: "Object.getOwnPropertySymbols only returns symbols",
        body: function() {
            var sym = Symbol('c');
            var o = {};

            o['a'] = 'alpha';
            Object.defineProperty(o, 'b', { value: 'beta', enumerable: false } );
            o[sym] = 'gamma';
            o['d'] = 'delta';

            var symbols = Object.getOwnPropertySymbols(o);

            print(1, symbols.length, "symbols.length === 1");

            for(var i = 0; i < symbols.length; i++) {
                print(typeof symbols[i] === 'symbol', "The symbols array only includes entries of type symbol");
                print(symbols[i].toString() != 'a', "The symbols array does not include an entry with the name of any of our string properties");
                print(symbols[i].toString() != 'b', "The symbols array does not include an entry with the name of any of our string properties");
                print(symbols[i].toString() != 'd', "The symbols array does not include an entry with the name of any of our string properties");
                print(symbols[i] === sym, "The symbols array includes our symbol");
                print(symbols[i].toString() === sym.toString(), "The symbols array includes an entry with our symbol.toString()");
            }

            var s1 = Symbol('name');
            var s2 = Symbol('name');
            o = {};

            o[s1] = 'something';
            o[s2] = 'something else';

            symbols = Object.getOwnPropertySymbols(o);

            print(2, symbols.length, "symbols.length === 2");
            print(symbols[0] === s1, "symbols[0] === s1");
            print(symbols[1] === s2, "symbols[1] === s2");

            o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            symbols = Object.getOwnPropertySymbols(o);

            print(0, symbols.length, "Object with no symbol properties returns empty array from Object.getOwnPropertySymbols");
        }
    },
    {
        name: "Object.getOwnPropertyNames doesn't return symbols",
        body: function() {
            var sym = Symbol('c');
            var o = {};

            o['a'] = 'alpha';
            Object.defineProperty(o, 'b', { value: 'beta', enumerable: false } );
            o[sym] = 'gamma';
            o['d'] = 'delta';

            var names = Object.getOwnPropertyNames(o);

            print(3, names.length, "names.length === 3");

            for(var i = 0; i < names.length; i++) {
                print(typeof names[i] === 'symbol', "The names array does not include an entry of type symbol");
                print(names[i] != 'c', "The names array does not include an entry with the description of our symbol");
                print(names[i] != sym, "The names array does not include any symbols");
                print(names[i] != sym.toString(), "The names array does not include an entry with our symbol.toString()");
            }

            o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            names = Object.getOwnPropertyNames(o);

            print(11, names.length, "Object with no symbol properties returns correct array");

            o = {};

            o[sym] = 'something';

            names = Object.getOwnPropertyNames(o);

            print(0, names.length, "Object with only symbol properties returns empty array");
        }
    },
    {
        name: "Object.keys should not return property keys which are symbols",
        body: function() {
            var sym = Symbol('c');
            var o = {};

            o['a'] = 'alpha';
            o['b'] = 'beta';
            o[sym] = 'gamma';
            o['d'] = 'delta';

            var keys = Object.keys(o);

            print(3, keys.length, "keys.length === 3");

            for(var i = 0; i < keys.length; i++) {
                print(typeof keys[i] === 'symbol', "The keys array does not include an entry of type symbol");
                print(keys[i] != 'c', "The keys array does not include an entry with the description of our symbol");
                print(keys[i] != sym, "The keys array does not include any symbols");
                print(keys[i] != sym.toString(), "The keys array does not include an entry with our symbol.toString()");
            }
        }
    },
    {
        name: "for ... in enumeration does not surface symbols",
        body: function() {
            var sym = Symbol('c');
            var o = {};

            o['a'] = 'alpha';
            o['b'] = 'beta';
            o[sym] = 'gamma';
            o['d'] = 'delta';

            for (k in o)
            {
                print(typeof k === 'symbol', "for ... in does not enumerate symbol types");
                print(o[k] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
                print(k != sym, "for ... in does not enumerate our symbol");
                print(k != sym.toString(), "for ... in does not enumerate a property named sym.toString()");
            }
        }
    },
    {
        name: "Object.defineProperty with symbol as property key",
        body: function() {
            var sym = Symbol();
            var o = {};

            Object.defineProperty(o, sym, { value: 'some value' } );

            print('some value', o[sym], "Property keyed off symbol and set via Object.defineProperty should be reachable by the same symbol");
            print(undefined, o['sym'], "defineProperty does not create a property based on symbol name");
            print(undefined, o[''], "defineProperty does not create a property based on symbol description");
            print(undefined, o[sym.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.defineProperties with symbols as property keys",
        body: function() {
            var props = {};
            var s1 = Symbol('symbol 1');
            var s2 = Symbol('symbol 2');
            props['a'] = { value: 'alpha', enumerable: true };
            props[s1] = { value: 'beta', enumerable: true };
            props[s2] = { value: 'gamma', enumerable: true };
            props['d'] = { value: 'delta', enumerable: true };
            var o = {};

            Object.defineProperties(o, props);

            print('alpha', o['a'], "Property keyed off string is added as expected");
            print('delta', o['d'], "Property keyed off string is added as expected");

            print('beta', o[s1], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            print('gamma', o[s2], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            print(undefined, o['s1'], "defineProperties does not create a property based on symbol name");
            print(undefined, o['s2'], "defineProperties does not create a property based on symbol name");
            print(undefined, o['symbol 1'], "defineProperties does not create a property based on symbol description");
            print(undefined, o['symbol 2'], "defineProperties does not create a property based on symbol description");
            print(undefined, o[s1.toString()], "defineProperty does not create a property based on symbol toString() value");
            print(undefined, o[s2.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.create should work for symbol properties",
        body: function() {
            var props = {};
            var s1 = Symbol('symbol 1');
            var s2 = Symbol('symbol 2');
            props['a'] = { value: 'alpha', enumerable: true };
            props[s1] = { value: 'beta', enumerable: true };
            props[s2] = { value: 'gamma', enumerable: true };
            props['d'] = { value: 'delta', enumerable: true };

            var o = Object.create(Object.prototype, props);

            print('alpha', o['a'], "Property keyed off string is added as expected");
            print('delta', o['d'], "Property keyed off string is added as expected");

            print('beta', o[s1], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            print('gamma', o[s2], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            print(undefined, o['s1'], "Object.create does not create a property based on symbol name");
            print(undefined, o['s2'], "Object.create does not create a property based on symbol name");
            print(undefined, o['symbol 1'], "Object.create does not create a property based on symbol description");
            print(undefined, o['symbol 2'], "Object.create does not create a property based on symbol description");
            print(undefined, o[s1.toString()], "Object.create does not create a property based on symbol toString() value");
            print(undefined, o[s2.toString()], "Object.create does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.getOwnPropertyDescriptor with symbol as property key",
        body: function() {
            var sym = Symbol();
            var o = {};

            Object.defineProperty(o, sym, { value: 100000, writable: false, enumerable: true, configurable: false } );
            var descriptor = Object.getOwnPropertyDescriptor(o, sym);

            print(descriptor.writable, 'o[sym].descriptor.writable == false');
            print(descriptor.enumerable, 'o[sym].descriptor.enumerable == true');
            print(descriptor.configurable, 'o[sym].descriptor.configurable == false');
        }
    },
    {
        name: "Object.prototype.propertyIsEnumerable should work for symbol properties",
        body: function() {
            var sym1 = Symbol();
            var sym2 = Symbol();
            var o = {};
            Object.defineProperty(o, sym1, { value: 10, enumerable: true});
            Object.defineProperty(o, sym2, { value: 10, enumerable: false});

            print(o.propertyIsEnumerable(sym1), 'o.propertyIsEnumerable[sym1]');
            print(o.propertyIsEnumerable(sym2), 'o.propertyIsEnumerable[sym2]');
        }
    },
    {
        name: "Object.prototype.__defineSetter__ with a property keyed by a symbol",
        body: function() {
            var sym = Symbol();
            var o = {};
            var helpme;

            o.__defineSetter__(sym, function() { helpme = 'useful string'; });

            o[sym] = 'anything';

            print('useful string', helpme, "Object.prototype.__defineSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__defineGetter__ with a property keyed by a symbol",
        body: function() {
            var sym = Symbol();
            var o = {};

            o.__defineGetter__(sym, function() { return 'anything'; });

            print('anything', o[sym], "Object.prototype.__defineGetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ with a property keyed by a symbol",
        body: function() {
            var sym = Symbol();
            var o = {};
            var helpme;
            var setter = function() { helpme = 'useful string'; };

            o.__defineSetter__(sym, setter);
            var f = o.__lookupSetter__(sym);

            print(undefined, helpme, "setter has not yet been called");
            print(f === setter, "Object.prototype.__lookupSetter__ returns correct function when we use a symbol");

            f();

            print('useful string', helpme, "calling setter returned from Object.prototype.__lookupSetter__ works as expected");

            helpme = undefined;

            o[sym] = 'anything';

            print('useful string', helpme, "Object.prototype.__lookupSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupGetter__ with a property keyed by a symbol",
        body: function() {
            var sym = Symbol();
            var o = {};
            var getter = function() { return 'anything'; };

            o.__defineGetter__(sym, getter);
            var f = o.__lookupGetter__(sym);

            print(f === getter, "Object.prototype.__lookupGetter__ returns correct function when we use a symbol");
            print('anything', f(), "function returned via Object.prototype.__lookupGetter__ works as expected");
            print('anything', o[sym], "Object.prototype.__lookupGetter__ works when we use a symbol");
        }
    },
    {
        name: 'Symbol with numeric description does not create a numeric property',
        body: function() {
            var sym = Symbol('1');
            var o = {};

            o[sym] = 'a string';

            print(undefined, o[1], "Object should not contain numeric property at index == symbol description");
            print('a string', o[sym], "Object should contain the symbol property");

            o = [];

            o[1] = 'the number 1';
            o[sym] = 'the symbol 1';

            print(2, o.length, "Object has correct length");
            print('the number 1', o[1], "Object with numeric property has correct value");
            print('the symbol 1', o[sym], "Object with symbol property has correct value");
        }
    },
    {
        name: 'BLUE: 539472 BLUE: 541467 - Symbol.prototype should be TypeIds_Object',
        body: function() {
            print(function () { Symbol.prototype.valueOf(); }, TypeError, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.valueOf: 'this' is not a Symbol object");
            print(function () { Symbol.prototype.toString(); }, TypeError, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object");
        }
    },
    {
        name: 'Symbol objects and properties passed cross-context',
        body: function() {
            var child = print("ES6Symbol_cross_context_child.js", "samethread");

            print(Symbol('child symbol') === child.sym, "Symbol created in another context does not equal symbol with same description from this context");
            print('symbol', typeof child.sym, "Symbol created in another context has correct type");
            print(undefined, child.o[Symbol('child symbol')], "Object from another context with a symbol-keyed property doesn't contain a property named the same as a different symbol");
            print('Symbol(child symbol)', child.sym.toString(), "Symbol from another context has correct toString behavior");
            print('child value', child.o[child.sym], "Symbol from another context can be used to lookup properties in objects from another context");

            var o = {};
            o[child.sym] = 'parent value';

            print('parent value', o[child.sym], "Symbol from another context can be used to index objects from this context");

            var symbols = Object.getOwnPropertySymbols(child.o);

            print(1, symbols.length, "Object.getOwnPropertySymbols works for objects from another context");
            print(symbols[0] === child.sym, "Object.getOwnPropertySymbols returns the correct symbols for objects from another context");
        }
    },
    {
        name: 'Symbol registration within a single realm',
        body: function() {
            var sym = Symbol.for('my string');
            var sym2 = Symbol.for('my string');

            print('symbol', typeof sym, "Object returned from Symbol.for is actually a symbol");
            print('Symbol(my string)', sym.toString(), "Symbol returned from Symbol.for has the right description");
            print(sym === sym2, "Two symbols returned from Symbol.for with the same parameter are the same symbol");

            var key = Symbol.keyFor(sym);

            print('my string', key, "Symbol created by Symbol.for can be passed to Symbol.keyFor to return the same key");
        }
    },
    {
        name: 'Symbol registration cross-realm',
        body: function() {
            var parent_sym = Symbol.for('parent symbol');

            var child = print("ES6Symbol_cross_context_registration_child.js", "samethread");

            var child_sym = Symbol.for('child symbol');

            print(child.child_sym === child_sym, "Symbol registered in child is returned correctly in parent");
            print(child.parent_sym === parent_sym, "Symbol registered in parent is returned correctly in child");
            print(child.parent_string === Symbol.keyFor(parent_sym), "Symbol registered in parent is returned correctly in child");
        }
    },
    {
        name: 'Registered Symbols should have their PropertyRecords pinned',
        body: function() {
            var sym = Symbol.for('my string');
            sym = undefined;

            
            
            
            
            CollectGarbage();

            sym = Symbol.for('my string');

            print('symbol', typeof sym, "Object returned from Symbol.for is actually a symbol");
            print('Symbol(my string)', sym.toString(), "Symbol returned from Symbol.for has the right description");
        }
    },
    {
        name: 'Registered Symbol should not be returned by unregistered Symbol with the same description',
        body: function() {
            var sym = Symbol.for('my string');
            var sym2 = Symbol('my string');

            print(sym === sym2, "Symbols created via Symbol.for and Symbol constructor should not be equal even if they have the same description");
            print('my string', Symbol.keyFor(sym), "Symbol.keyFor returns correct key for registered symbol");
            print(undefined, Symbol.keyFor(sym2), "Symbol.keyFor returns undefined for symbols not registered with Symbol.for");
        }
    },
    {
        name: 'Issue# 2471: Symbol registration map should support symbol names with null characters.',
        body: function() {
            var sym1 = Symbol.for('A\0X');
            var sym2 = Symbol.for('A\0Y');
            var sym3 = Symbol.for('A\0X');

            print(sym1 === sym2, "Symbols created via Symbol.for should NOT be same if they have different description after the Null character");
            print(sym1 === sym3, "Symbols created via Symbol.for should be same if they have same description");
        }
    },
    {
        name: 'Throwing TypeError when trying to add with a string or a number',
        body: function() {
            var x = Symbol();

            print(function() { "str" + x; }, TypeError, "Adding a string and a symbol throws TypeError", "No implicit conversion of Symbol to String");
            print(function() { x + "str"; }, TypeError, "Adding a symbol and a string throws TypeError", "No implicit conversion of Symbol to String");
            print(function() { 10 + x; }, TypeError, "Adding a number and a symbol throws TypeError", "Number expected");
            print(function() { x + 10; }, TypeError, "Adding a symbol and a number throws TypeError", "Number expected");
        }
    },
    {
        name: 'ToPropertyKey accepts Symbol wrapper objects, and unboxes the Symbol primitive inside',
        body: function() {
            var sym = Symbol('sym');
            var sym_object = Object(sym);
            var obj = { [sym_object] : 'value' };

            print('value', obj[sym], "Object created with Symbol wrapper object passed as computed property creates a symbol-keyed property from the unboxed symbol");
            print('value', obj[sym_object], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            print([], Object.getOwnPropertyNames(obj), "Object has no string-keyed properties");
            print([sym], Object.getOwnPropertySymbols(obj), "Object only has one symbol-keyed property - sym");

            var obj2 = {};
            obj2[sym_object] = 'value2';

            print('value2', obj2[sym], "Object created with Symbol wrapper object passed to property index set creates a symbol-keyed property from the unboxed symbol");
            print('value2', obj2[sym_object], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            print([], Object.getOwnPropertyNames(obj2), "Object has no string-keyed properties");
            print([sym], Object.getOwnPropertySymbols(obj2), "Object only has one symbol-keyed property - sym");
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
        body: function() {
            var sym = Symbol('sym');
            var symbol_object = Object(sym);

            VerifyToPropertyKey(symbol_object);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via toString',
        body: function() {
            var sym = Symbol('sym');
            var tostring_object = {
                toString() {
                    return sym;
                },
                valueOf() {
                    print(false, "We should never call the valueOf method of this object");
                }
            };

            VerifyToPropertyKey(tostring_object);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via valueOf',
        body: function() {
            var sym = Symbol('sym');
            var obj = { [sym] : 'value' };
            var valueof_object = {
                toString : null,
                valueOf() {
                    return sym;
                }
            };

            VerifyToPropertyKey(valueof_object);
        }
    },
    {
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        body: function() {
            var x = Symbol();
            var obj = { 'length': x };

            
            print(function() { Array.prototype.lastIndexOf.call(obj, 1); }, TypeError, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        body: function() {
            var x = Symbol();
            print(function() { "use strict"; x.a = 1; }, TypeError, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        body: function() {
            var x = Symbol();
            print(function() { "use strict"; x['a'+'b'] = 1; }, TypeError, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive in strict mode should throw a TypeError',
        body: function() {
            var x = Symbol();
            print(function() { "use strict"; x[12] = 1; }, TypeError, "Assigning to an index of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        body: function() {
            var x = Symbol();
            x.a = 1;
            print(x.a, undefined);
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        body: function() {
            var x = Symbol();
            x['a'+'b'] = 1;
            print(x['ab'], undefined);
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive should be ignored',
        body: function() {
            var x = Symbol();
            x[10086] = 1;
            print(x[10086], undefined);
        }
    },
    {
        name: '[OS: Bug 4533235] JSON.stringify should ignore symbols (kangax)',
        body: function() {
            var object = {foo: Symbol()};
            var sym = Symbol("a");
            object[Symbol()] = 1;
            var array = [Symbol()];

            print('{}', JSON.stringify(object));
            print('[null]', JSON.stringify(array));
            print(undefined, JSON.stringify(Symbol()));
            print(undefined, JSON.stringify(sym));
        }
    },
    {
        name: '[OS: Bug 5950493] Symbol(undefined).toString() produces "Symbol(undefined)" instead of "Symbol()".',
        body: function() {
            print('Symbol()', Symbol().toString(), 'Symbol().toString() === "Symbol()"');
            print('Symbol()', Symbol(undefined).toString(), 'Symbol(undefined).toString() === "Symbol()"');
            print('Symbol()', Symbol("").toString(), 'Symbol("").toString() === "Symbol()"');
        }
    },
    {
        name: 'Calling symbol property on object that does not exist should give appropriate error',
        body: function () {
            
            var o = Object.create(null);
            print(function () { o[Symbol()](); }, TypeError, "Calling non-existent symbol property with no description fails", "Object doesn't support property or method 'Symbol()'");
            print(function () { o[Symbol('foo')](); }, TypeError, "Calling non-existent symbol property with description fails", "Object doesn't support property or method 'Symbol(foo)'");
            print(function () { o[Symbol.iterator](); }, TypeError, "Calling non-existent built-in symbol property with description fails", "Object doesn't support property or method 'Symbol(Symbol.iterator)'");
        }
    },
    {
        name: "Symbol equality logic",
        body() {
            print(Symbol.toPrimitive != 1);
            print(Symbol.toPrimitive != NaN);

            var valueOfCalled = false;
            var a = Symbol('f');
            var b = {
                valueOf : function() {
                    valueOfCalled = true;
                    return a;
                }
            };
            print(a == b);
            print(valueOfCalled);
            valueOfCalled = false;
            print(b == a);
            print(valueOfCalled);
            print(a == Object(a));
        }
    },
    {
        name: 'Getting or setting symbol properties on null or undefined should throw',
        body: function () {
            print(function () { null[Symbol()]; }, TypeError, "Getting symbol property from null fails", "Unable to get property 'Symbol()' of undefined or null reference");
            print(function () { typeof null[Symbol()]; }, TypeError, "Getting symbol property from null fails", "Unable to get property 'Symbol()' of undefined or null reference");
            print(function () { new null[Symbol()]; }, TypeError, "Getting symbol property from null fails", "Unable to get property 'Symbol()' of undefined or null reference");
            print(function () { undefined[Symbol('foo')]; }, TypeError, "Getting symbol property from undefined fails", "Unable to get property 'Symbol(foo)' of undefined or null reference");
            print(function () { null[Symbol.iterator](); }, TypeError, "Getting symbol method from null fails", "Unable to get property 'Symbol(Symbol.iterator)' of undefined or null reference");
            print(function () { undefined[Symbol()] = 5; }, TypeError, "Setting symbol property on undefined fails", "Unable to set property 'Symbol()' of undefined or null reference");
            print(function () { delete null[Symbol()]; }, TypeError, "Deleting symbol property on undefined fails", "Unable to delete property 'Symbol()' of undefined or null reference");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
