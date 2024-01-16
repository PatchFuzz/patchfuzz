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





shouldBe(Intl.PluralRules instanceof Function, true);




shouldThrow(() => Intl.PluralRules(), TypeError);
shouldThrow(() => Intl.PluralRules.call({}), TypeError);



shouldThrow(() => new Intl.PluralRules('$'), RangeError);
shouldThrow(() => new Intl.PluralRules('en', null), TypeError);
shouldBe(new Intl.PluralRules() instanceof Intl.PluralRules, true);


{
    class DerivedPluralRules extends Intl.PluralRules {};
    shouldBe((new DerivedPluralRules) instanceof DerivedPluralRules, true);
    shouldBe((new DerivedPluralRules) instanceof Intl.PluralRules, true);
    shouldBe(new DerivedPluralRules('en').select(1), 'one');
    shouldBe(Object.getPrototypeOf(new DerivedPluralRules), DerivedPluralRules.prototype);
    shouldBe(Object.getPrototypeOf(Object.getPrototypeOf(new DerivedPluralRules)), Intl.PluralRules.prototype);
}




shouldBe(Intl.PluralRules.length, 0);




shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules, 'prototype').writable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules, 'prototype').enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules, 'prototype').configurable, false);




shouldBe(Intl.PluralRules.supportedLocalesOf.length, 1);


shouldBe(Intl.PluralRules.supportedLocalesOf() instanceof Array, true);

shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf.call(null, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf.call({}, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf.call(1, 'en')), '["en"]');

shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf(9)), '[]');

shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf('en')), '["en"]');

shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf({ length: 4, 1: 'en', 0: 'es', 3: 'de' })), '["es","en","de"]');

shouldBe(JSON.stringify(Intl.PluralRules.supportedLocalesOf([ 'en', 'pt', 'en', 'es' ])), '["en","pt","es"]');

shouldBe(
    JSON.stringify(Intl.PluralRules.supportedLocalesOf('En-laTn-us-variAnt-fOObar-1abc-U-kn-tRue-A-aa-aaa-x-RESERVED')),
    $vm.icuVersion() >= 67
        ? '["en-Latn-US-1abc-foobar-variant-a-aa-aaa-u-kn-x-reserved"]'
        : '["en-Latn-US-variant-foobar-1abc-a-aa-aaa-u-kn-x-reserved"]'
);

shouldThrow(() => Intl.PluralRules.supportedLocalesOf(Object.create(null, { length: { get() { throw new Error(); } } })), Error);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf(Object.create(null, { length: { value: 1 }, 0: { get() { throw new Error(); } } })), Error);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf([ { toString() { throw new Error(); } } ]), Error);

shouldThrow(() => Intl.PluralRules.supportedLocalesOf('no-bok'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-some-thing'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf([ 5 ]), TypeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf(''), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('a'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('abcdefghij'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('#$'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-@-abc'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-u'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-u-kn-true-u-ko-true'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-x'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-*'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en-'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('en--US'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('i-klingon'), RangeError); 
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-en-US-12345'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-12345-12345-en-US'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-en-US-12345-12345'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-en-u-foo'), RangeError);
shouldThrow(() => Intl.PluralRules.supportedLocalesOf('x-en-u-foo-u-bar'), RangeError);


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
    shouldNotThrow(() => Intl.PluralRules.supportedLocalesOf(validLanguageTag));




shouldBe(Object.getPrototypeOf(Intl.PluralRules.prototype), Object.prototype);



shouldBe(Intl.PluralRules.prototype.constructor, Intl.PluralRules);



shouldBe(Intl.PluralRules.prototype[Symbol.toStringTag], 'Intl.PluralRules');
shouldBe(Object.prototype.toString.call(Intl.PluralRules.prototype), '[object Intl.PluralRules]');

shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, Symbol.toStringTag).writable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, Symbol.toStringTag).enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, Symbol.toStringTag).configurable, true);




shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, 'select').value instanceof Function, true);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, 'select').writable, true);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, 'select').enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.PluralRules.prototype, 'select').configurable, true);

shouldBe(new Intl.PluralRules().select, new Intl.PluralRules().select);

shouldBe(Intl.PluralRules.prototype.select.length, 1);

var defaultPluralRules = new Intl.PluralRules('en');



shouldThrow(() => Intl.PluralRules.prototype.select.call(1), TypeError);

shouldThrow(() => Intl.PluralRules.prototype.select.call({}), TypeError);

shouldThrow(() => defaultPluralRules.select({ valueOf() { throw new Error(); } }), Error);

shouldBe(defaultPluralRules.select(1), 'one');
shouldBe(Intl.PluralRules.prototype.select.call(defaultPluralRules, 1), 'one');
shouldBe(defaultPluralRules.select(0), 'other');
shouldBe(defaultPluralRules.select(-1), 'one');
shouldBe(defaultPluralRules.select(2), 'other');


var englishOrdinals = new Intl.PluralRules('en', { type: 'ordinal' });
shouldBe(englishOrdinals.select(0), 'other');
shouldBe(englishOrdinals.select(1), 'one');
shouldBe(englishOrdinals.select(2), 'two');
shouldBe(englishOrdinals.select(3), 'few');
shouldBe(englishOrdinals.select(4), 'other');
shouldBe(englishOrdinals.select(11), 'other');
shouldBe(englishOrdinals.select(12), 'other');
shouldBe(englishOrdinals.select(13), 'other');
shouldBe(englishOrdinals.select(14), 'other');
shouldBe(englishOrdinals.select(21), 'one');
shouldBe(englishOrdinals.select(22), 'two');
shouldBe(englishOrdinals.select(23), 'few');
shouldBe(englishOrdinals.select(24), 'other');
shouldBe(englishOrdinals.select(101), 'one');
shouldBe(englishOrdinals.select(102), 'two');
shouldBe(englishOrdinals.select(103), 'few');
shouldBe(englishOrdinals.select(104), 'other');

var arabicCardinals = new Intl.PluralRules('ar');
shouldBe(arabicCardinals.select(0), 'zero');
shouldBe(arabicCardinals.select(1), 'one');
shouldBe(arabicCardinals.select(2), 'two');
shouldBe(arabicCardinals.select(3), 'few');
shouldBe(arabicCardinals.select(11), 'many');



shouldBe(Intl.PluralRules.prototype.resolvedOptions.length, 0);



shouldThrow(() => Intl.PluralRules.prototype.resolvedOptions.call(5), TypeError);

shouldThrow(() => Intl.PluralRules.prototype.resolvedOptions.call({}), TypeError);

shouldBe(defaultPluralRules.resolvedOptions() instanceof Object, true);
shouldBe(defaultPluralRules.resolvedOptions() !== defaultPluralRules.resolvedOptions(), true);




shouldBe(defaultPluralRules.resolvedOptions().type, 'cardinal');
shouldBe(defaultPluralRules.resolvedOptions().minimumIntegerDigits, 1);
shouldBe(defaultPluralRules.resolvedOptions().minimumFractionDigits, 0);
shouldBe(defaultPluralRules.resolvedOptions().maximumFractionDigits, 3);
shouldBe(defaultPluralRules.resolvedOptions().minimumSignificantDigits, undefined);
shouldBe(defaultPluralRules.resolvedOptions().maximumSignificantDigits, undefined);


shouldThrow(() => new Intl.PluralRules('en', { localeMatcher: { toString() { throw new Error(); } } }), Error);
shouldThrow(() => new Intl.PluralRules('en', { localeMatcher:'bad' }), RangeError);
shouldNotThrow(() => new Intl.PluralRules('en', { localeMatcher:'lookup' }));
shouldNotThrow(() => new Intl.PluralRules('en', { localeMatcher:'best fit' }));


shouldBe(new Intl.PluralRules('en', {type: 'cardinal'}).resolvedOptions().type, 'cardinal');
shouldBe(new Intl.PluralRules('en', {type: 'ordinal'}).resolvedOptions().type, 'ordinal');
shouldThrow(() => new Intl.PluralRules('en', {type: 'bad'}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {type: { toString() { throw new Error(); } }}), Error);


shouldBe(new Intl.PluralRules('en', {minimumIntegerDigits: 1}).resolvedOptions().minimumIntegerDigits, 1);
shouldBe(new Intl.PluralRules('en', {minimumIntegerDigits: '2'}).resolvedOptions().minimumIntegerDigits, 2);
shouldBe(new Intl.PluralRules('en', {minimumIntegerDigits: {valueOf() { return 3; }}}).resolvedOptions().minimumIntegerDigits, 3);
shouldBe(new Intl.PluralRules('en', {minimumIntegerDigits: 4.9}).resolvedOptions().minimumIntegerDigits, 4);
shouldBe(new Intl.PluralRules('en', {minimumIntegerDigits: 21}).resolvedOptions().minimumIntegerDigits, 21);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: 0}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: 22}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: 0.9}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: 21.1}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: NaN}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: Infinity}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', { get minimumIntegerDigits() { throw new Error(); } }), Error);
shouldThrow(() => new Intl.PluralRules('en', {minimumIntegerDigits: {valueOf() { throw new Error(); }}}), Error);


shouldBe(new Intl.PluralRules('en', {minimumFractionDigits: 0}).resolvedOptions().minimumFractionDigits, 0);
shouldBe(new Intl.PluralRules('en', {minimumFractionDigits: 0}).resolvedOptions().maximumFractionDigits, 3);
shouldBe(new Intl.PluralRules('en', {minimumFractionDigits: 6}).resolvedOptions().minimumFractionDigits, 6);
shouldBe(new Intl.PluralRules('en', {minimumFractionDigits: 6}).resolvedOptions().maximumFractionDigits, 6);
shouldThrow(() => new Intl.PluralRules('en', {minimumFractionDigits: -1}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumFractionDigits: 21}), RangeError);


shouldBe(new Intl.PluralRules('en', {maximumFractionDigits: 6}).resolvedOptions().maximumFractionDigits, 6);
shouldThrow(() => new Intl.PluralRules('en', {minimumFractionDigits: 7, maximumFractionDigits: 6}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {maximumFractionDigits: -1}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {maximumFractionDigits: 21}), RangeError);


shouldBe(new Intl.PluralRules('en', {minimumSignificantDigits: 6}).resolvedOptions().minimumSignificantDigits, 6);
shouldBe(new Intl.PluralRules('en', {minimumSignificantDigits: 6}).resolvedOptions().maximumSignificantDigits, 21);
shouldThrow(() => new Intl.PluralRules('en', {minimumSignificantDigits: 0}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {minimumSignificantDigits: 22}), RangeError);


shouldBe(new Intl.PluralRules('en', {maximumSignificantDigits: 6}).resolvedOptions().minimumSignificantDigits, 1);
shouldBe(new Intl.PluralRules('en', {maximumSignificantDigits: 6}).resolvedOptions().maximumSignificantDigits, 6);
shouldThrow(() => new Intl.PluralRules('en', {minimumSignificantDigits: 7, maximumSignificantDigits: 6}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {maximumSignificantDigits: 0}), RangeError);
shouldThrow(() => new Intl.PluralRules('en', {maximumSignificantDigits: 22}), RangeError);


shouldBe(new Intl.PluralRules('en', {maximumFractionDigits: 0}).select(1.4), 'one');
shouldBe(new Intl.PluralRules('en', {maximumSignificantDigits: 1}).select(1.4), 'one');
shouldBe(new Intl.PluralRules('en', {type: 'ordinal', maximumSignificantDigits: 2}).select(123), 'other');
shouldBe(new Intl.PluralRules('en', {type: 'ordinal', maximumSignificantDigits: 3}).select(123.4), 'few');

shouldBe(new Intl.PluralRules('en', {minimumFractionDigits: 1}).select(1), 'other');
shouldBe(new Intl.PluralRules('en', {minimumSignificantDigits: 2}).select(1), 'other');


shouldBe(new Intl.PluralRules('en').resolvedOptions().pluralCategories instanceof Array, true);
shouldBe(new Intl.PluralRules('ar').resolvedOptions().pluralCategories.join(), 'few,many,one,two,zero,other');
shouldBe(new Intl.PluralRules('en').resolvedOptions().pluralCategories.join(), 'one,other');
shouldBe(new Intl.PluralRules('en', {type: 'ordinal'}).resolvedOptions().pluralCategories.join(), 'few,one,two,other');
