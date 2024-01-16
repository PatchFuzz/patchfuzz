function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldNotThrow(func) {
    func();
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




shouldBe(Intl instanceof Object, true);
shouldBe(typeof Intl, 'object');
shouldBe(Object.prototype.toString.call(Intl), '[object Intl]');


shouldBe(Object.getPrototypeOf(Intl), Object.prototype);



shouldThrow(() => new Intl, TypeError);


shouldThrow(() => Intl(), TypeError);


shouldBe(Object.keys(Intl).length, 0);


var __Intl = Intl;
shouldBe(delete Intl, true);

function global() { return this; }
shouldBe('Intl' in global(), false);

Intl = __Intl;




shouldBe(Intl.getCanonicalLocales.length, 1);


shouldBe(Intl.getCanonicalLocales() instanceof Array, true);

shouldBe(JSON.stringify(Intl.getCanonicalLocales.call(null, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.getCanonicalLocales.call({}, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.getCanonicalLocales.call(1, 'en')), '["en"]');

shouldBe(JSON.stringify(Intl.getCanonicalLocales(9)), '[]');

shouldBe(JSON.stringify(Intl.getCanonicalLocales('en')), '["en"]');

shouldBe(JSON.stringify(Intl.getCanonicalLocales({ length: 4, 1: 'en', 0: 'es', 3: 'de' })), '["es","en","de"]');

shouldBe(JSON.stringify(Intl.getCanonicalLocales([ 'en', 'pt', 'en', 'es' ])), '["en","pt","es"]');

shouldBe(
    JSON.stringify(Intl.getCanonicalLocales('En-laTn-us-variAnt-fOObar-1abc-U-kn-tRue-A-aa-aaa-x-RESERVED')),
    $vm.icuVersion() >= 67
        ? '["en-Latn-US-1abc-foobar-variant-a-aa-aaa-u-kn-x-reserved"]'
        : '["en-Latn-US-variant-foobar-1abc-a-aa-aaa-u-kn-x-reserved"]'
);

shouldThrow(() => Intl.getCanonicalLocales(Object.create(null, { length: { get() { throw new Error(); } } })), Error);
shouldThrow(() => Intl.getCanonicalLocales(Object.create(null, { length: { value: 1 }, 0: { get() { throw new Error(); } } })), Error);
shouldThrow(() => Intl.getCanonicalLocales([ { toString() { throw new Error(); } } ]), Error);

shouldThrow(() => Intl.getCanonicalLocales('no-bok'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('x-some-thing'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales([ 5 ]), TypeError);
shouldThrow(() => Intl.getCanonicalLocales(''), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('a'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('abcdefghij'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('#$'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-@-abc'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-u'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-u-kn-true-u-ko-true'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-x'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-*'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en-'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('en--US'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('i-klingon'), RangeError); 
shouldThrow(() => Intl.getCanonicalLocales('x-en-US-12345'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('x-12345-12345-en-US'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('x-en-US-12345-12345'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('x-en-u-foo'), RangeError);
shouldThrow(() => Intl.getCanonicalLocales('x-en-u-foo-u-bar'), RangeError);


var validLanguageTags = [
    'de', 
    'de-DE', 
    'DE-de', 
    'cmn', 
    'cmn-Hans', 
    'CMN-hANS', 
    'cmn-hans-cn', 
    'es-419', 
    'es-419-u-nu-latn-cu-bob', 
    'cmn-hans-cn-t-ca-u-ca-x-t-u', 
    'enochian-enochian', 
    'de-gregory-u-ca-gregory', 
    'aa-a-foo-x-a-foo-bar', 
];
for (var validLanguageTag of validLanguageTags)
    shouldNotThrow(() => Intl.getCanonicalLocales(validLanguageTag));
