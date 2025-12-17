function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldThrow(func, errorType) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name}!`);
}

shouldBe(String.prototype.toLocaleUpperCase.length, 0);


shouldBe(''.toLocaleUpperCase(), '');


shouldBe(String.prototype.toLocaleUpperCase.call({ toString() { return 'a' } }), 'A');
shouldThrow(() => String.prototype.toLocaleUpperCase.call({ toString() { throw new Error() } }), Error);
shouldThrow(() => String.prototype.toLocaleUpperCase.call(null), TypeError);
shouldThrow(() => String.prototype.toLocaleUpperCase.call(undefined), TypeError);


shouldBe('a'.toLocaleUpperCase(9), 'A');

shouldBe('i'.toLocaleUpperCase({ length: 4, 1: 'az', 3: 'en' }), '\u0130');

shouldThrow(() => 'a'.toLocaleUpperCase(Object.create(null, { length: { get() { throw new Error() } } })), Error);
shouldThrow(() => 'a'.toLocaleUpperCase(Object.create(null, { length: { value: 1 }, 0: { get() { throw new Error() } } })), Error);
shouldThrow(() => 'a'.toLocaleUpperCase([ { toString() { throw new Error() } } ]), Error);

shouldThrow(() => 'a'.toLocaleUpperCase([ 5 ]), TypeError);
shouldThrow(() => 'a'.toLocaleUpperCase(''), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('a'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('abcdefghij'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('#$'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-@-abc'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-u'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-u-kn-true-u-ko-true'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-x'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-*'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en-'), RangeError);
shouldThrow(() => 'a'.toLocaleUpperCase('en--US'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('no-bok'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('x-some-thing'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('i-klingon'), RangeError); 
shouldThrow(() => 'A'.toLocaleUpperCase('x-en-US-12345'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('x-12345-12345-en-US'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('x-en-US-12345-12345'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('x-en-u-foo'), RangeError);
shouldThrow(() => 'A'.toLocaleUpperCase('x-en-u-foo-u-bar'), RangeError);


shouldBe('AbCdEfGhIjKlMnOpQRStuvWXyZ0123456789'.toLocaleUpperCase(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
shouldBe('àéîöœøūñ'.toLocaleUpperCase(), 'ÀÉÎÖŒØŪÑ');


shouldBe('i'.toLocaleUpperCase('und'), 'I');


shouldBe('\u0130'.toLocaleUpperCase('az'), '\u0130');
shouldBe('I'.toLocaleUpperCase('az'), 'I');
shouldBe('i'.toLocaleUpperCase('az'), '\u0130');
shouldBe('\u0131'.toLocaleUpperCase('az'), 'I');


shouldBe('I\u0307'.toLocaleUpperCase('lt'), 'I\u0307');
shouldBe('J\u0307'.toLocaleUpperCase('lt'), 'J\u0307');

var softDotted = [
    '\u0069', '\u006A',               
    '\u012F',                         
    '\u0249',                         
    '\u0268',                         
    '\u029D',                         
    '\u02B2',                         
    '\u03F3',                         
    '\u0456',                         
    '\u0458',                         
    '\u1D62',                         
    '\u1D96',                         
    '\u1DA4',                         
    '\u1DA8',                         
    '\u1E2D',                         
    '\u1ECB',                         
    '\u2071',                         
    '\u2148', '\u2149',               
    '\u2C7C',                         
    '\uD835\uDC22', '\uD835\uDC23',   
    '\uD835\uDC56', '\uD835\uDC57',   
    '\uD835\uDC8A', '\uD835\uDC8B',   
    '\uD835\uDCBE', '\uD835\uDCBF',   
    '\uD835\uDCF2', '\uD835\uDCF3',   
    '\uD835\uDD26', '\uD835\uDD27',   
    '\uD835\uDD5A', '\uD835\uDD5B',   
    '\uD835\uDD8E', '\uD835\uDD8F',   
    '\uD835\uDDC2', '\uD835\uDDC3',   
    '\uD835\uDDF6', '\uD835\uDDF7',   
    '\uD835\uDE2A', '\uD835\uDE2B',   
    '\uD835\uDE5E', '\uD835\uDE5F',   
    '\uD835\uDE92', '\uD835\uDE93',   
];

for (var i = 0; i < softDotted.length; ++i) {
    shouldBe(`${softDotted[i]}\u0307`.toLocaleUpperCase('lt'), softDotted[i].toLocaleUpperCase('und'));
    shouldBe(`${softDotted[i]}\u0323\u0307`.toLocaleUpperCase('lt'), `${softDotted[i].toLocaleUpperCase('und')}\u0323`);
    shouldBe(`${softDotted[i]}\uD800\uDDFD\u0307`.toLocaleUpperCase('lt'), `${softDotted[i].toLocaleUpperCase('und')}\uD800\uDDFD`);
}


shouldBe('\u0130'.toLocaleUpperCase('tr'), '\u0130');
shouldBe('I'.toLocaleUpperCase('tr'), 'I');
shouldBe('i'.toLocaleUpperCase('tr'), '\u0130');
shouldBe('\u0131'.toLocaleUpperCase('tr'), 'I');
