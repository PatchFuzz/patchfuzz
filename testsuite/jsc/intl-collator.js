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




shouldBe(Intl.Collator instanceof Function, true);


shouldBe(Intl.Collator() instanceof Intl.Collator, true);
shouldBe(Intl.Collator.call({}) instanceof Intl.Collator, true);
shouldBe(new Intl.Collator() instanceof Intl.Collator, true);
shouldBe(Intl.Collator('en') instanceof Intl.Collator, true);
shouldBe(Intl.Collator(42) instanceof Intl.Collator, true);
shouldThrow(() => Intl.Collator(null), TypeError);
shouldThrow(() => Intl.Collator({ get length() { throw new Error(); } }), Error);
shouldBe(Intl.Collator('en', { }) instanceof Intl.Collator, true);
shouldBe(Intl.Collator('en', 42) instanceof Intl.Collator, true);
shouldThrow(() => Intl.Collator('en', null), TypeError);


{
    class DerivedCollator extends Intl.Collator {}
    shouldBe((new DerivedCollator) instanceof DerivedCollator, true);
    shouldBe((new DerivedCollator) instanceof Intl.Collator, true);
    shouldBe(new DerivedCollator('en').compare('a', 'b'), -1);
    shouldBe(Object.getPrototypeOf(new DerivedCollator), DerivedCollator.prototype);
    shouldBe(Object.getPrototypeOf(Object.getPrototypeOf(new DerivedCollator)), Intl.Collator.prototype);
}

function testCollator(collator, possibleOptionDifferences) {
    var possibleOptions = possibleOptionDifferences.map((difference) => {
        var defaultOptions = {
            locale: undefined,
            usage: "sort",
            sensitivity: "variant",
            ignorePunctuation: false,
            collation: "default",
            numeric: false,
            caseFirst: "false"
        };
        Object.assign(defaultOptions, difference);
        return JSON.stringify(defaultOptions);
    });
    var actualOptions = JSON.stringify(collator.resolvedOptions());
    return possibleOptions.includes(actualOptions);
}


shouldBe(testCollator(Intl.Collator('en'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('eN-uS'), [{locale: 'en-US'}]), true);
shouldBe(testCollator(Intl.Collator(['en', 'de']), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('de'), [{locale: 'de'}]), true);


shouldBe(testCollator(Intl.Collator('en-u-co-eor'), [{locale: 'en-u-co-eor', collation: 'eor'}, {locale: 'en'}]), true);
shouldBe(testCollator(new Intl.Collator('en-u-co-eor'), [{locale: 'en-u-co-eor', collation: 'eor'}, {locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('En-U-Co-Eor'), [{locale: 'en-u-co-eor', collation: 'eor'}, {locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-co-phonebk'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-co-standard'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-co-search'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-co-abcd'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('de-u-co-phonebk'), [{locale: 'de-u-co-phonebk', collation: 'phonebk'}, {locale: 'de'}]), true);


shouldBe(testCollator(Intl.Collator('en-u-kn'), [{locale: 'en-u-kn', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-true'), [{locale: 'en-u-kn', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-false'), [{locale: 'en-u-kn-false', numeric: false}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-abcd'), [{locale: 'en'}]), true);


shouldBe(testCollator(Intl.Collator('en-u-kf'), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kf-upper'), [{locale: 'en-u-kf-upper', caseFirst: 'upper'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kf-lower'), [{locale: 'en-u-kf-lower', caseFirst: 'lower'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kf-false'), [{locale: 'en-u-kf-false', caseFirst: 'false'}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kf-true'), [{locale: 'en'}]), true);


shouldBe(testCollator(Intl.Collator('en-u-aa-aaaa-kf-upper-bb-bbbb-co-eor-cc-cccc-y-yyd'), [{locale: 'en-u-co-eor-kf-upper', collation: 'eor', caseFirst: 'upper'}, {locale: 'en-u-kf-upper', caseFirst: 'upper'}]), true);


shouldBe(testCollator(Intl.Collator('en-u-kf-upper-a-aa'), [{locale: 'en-u-kf-upper', caseFirst: 'upper'}]), true);
shouldBe(testCollator(Intl.Collator('en-a-aa-u-kf-upper'), [{locale: 'en-u-kf-upper', caseFirst: 'upper'}]), true);
shouldBe(testCollator(Intl.Collator('en-a-aa-u-kf-upper-b-bb'), [{locale: 'en-u-kf-upper', caseFirst: 'upper'}]), true);


shouldBe(testCollator(Intl.Collator('en', {usage: 'sort'}), [{locale: 'en', usage: 'sort'}]), true);
shouldBe(testCollator(Intl.Collator('en', {usage: 'search'}), [{locale: 'en', usage: 'search'}]), true);
shouldThrow(() => Intl.Collator('en', {usage: 'Sort'}), RangeError);
shouldThrow(() => Intl.Collator('en', { get usage() { throw new Error(); } }), Error);
shouldThrow(() => Intl.Collator('en', {usage: {toString() { throw new Error(); }}}), Error);


shouldBe(testCollator(Intl.Collator('en', {localeMatcher: 'lookup'}), [{locale: 'en'}]), true);
shouldBe(testCollator(Intl.Collator('en', {localeMatcher: 'best fit'}), [{locale: 'en'}]), true);
shouldThrow(() => Intl.Collator('en', {localeMatcher: 'LookUp'}), RangeError);
shouldThrow(() => Intl.Collator('en', { get localeMatcher() { throw new Error(); } }), Error);


shouldBe(testCollator(Intl.Collator('en', {numeric: true}), [{locale: 'en', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en', {numeric: false}), [{locale: 'en', numeric: false}]), true);
shouldBe(testCollator(Intl.Collator('en', {numeric: 'false'}), [{locale: 'en', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en', {numeric: { }}), [{locale: 'en', numeric: true}]), true);
shouldThrow(() => Intl.Collator('en', { get numeric() { throw new Error(); } }), Error);


shouldBe(testCollator(Intl.Collator('en', {caseFirst: 'upper'}), [{locale: 'en', caseFirst: 'upper'}]), true);
shouldBe(testCollator(Intl.Collator('en', {caseFirst: 'lower'}), [{locale: 'en', caseFirst: 'lower'}]), true);
shouldBe(testCollator(Intl.Collator('en', {caseFirst: 'false'}), [{locale: 'en', caseFirst: 'false'}]), true);
shouldBe(testCollator(Intl.Collator('en', {caseFirst: false}), [{locale: 'en', caseFirst: 'false'}]), true);
shouldThrow(() => Intl.Collator('en', {caseFirst: 'true'}), RangeError);
shouldThrow(() => Intl.Collator('en', { get caseFirst() { throw new Error(); } }), Error);


shouldBe(testCollator(Intl.Collator('en', {sensitivity: 'base'}), [{locale: 'en', sensitivity: 'base'}]), true);
shouldBe(testCollator(Intl.Collator('en', {sensitivity: 'accent'}), [{locale: 'en', sensitivity: 'accent'}]), true);
shouldBe(testCollator(Intl.Collator('en', {sensitivity: 'case'}), [{locale: 'en', sensitivity: 'case'}]), true);
shouldBe(testCollator(Intl.Collator('en', {sensitivity: 'variant'}), [{locale: 'en', sensitivity: 'variant'}]), true);
shouldThrow(() => Intl.Collator('en', {sensitivity: 'abcd'}), RangeError);
shouldThrow(() => Intl.Collator('en', { get sensitivity() { throw new Error(); } }), Error);


shouldBe(testCollator(Intl.Collator('en', {ignorePunctuation: true}), [{locale: 'en', ignorePunctuation: true}]), true);
shouldBe(testCollator(Intl.Collator('en', {ignorePunctuation: false}), [{locale: 'en', ignorePunctuation: false}]), true);
shouldBe(testCollator(Intl.Collator('en', {ignorePunctuation: 'false'}), [{locale: 'en', ignorePunctuation: true}]), true);
shouldThrow(() => Intl.Collator('en', { get ignorePunctuation() { throw new Error(); } }), Error);


shouldBe(testCollator(Intl.Collator('en-u-kn-true', {numeric: false}), [{locale: 'en', numeric: false}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-false', {numeric: true}), [{locale: 'en', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-true', {numeric: true}), [{locale: 'en-u-kn', numeric: true}]), true);
shouldBe(testCollator(Intl.Collator('en-u-kn-false', {numeric: false}), [{locale: 'en-u-kn-false', numeric: false}]), true);


shouldBe(testCollator(Intl.Collator('en-a-aa-u-kn-false-co-eor-kf-upper-b-bb', {usage: 'sort', numeric: true, caseFirst: 'lower', sensitivity: 'case', ignorePunctuation: true}), [{locale: 'en-u-co-eor', usage: 'sort', sensitivity: 'case', ignorePunctuation: true, collation: 'eor', numeric: true, caseFirst: 'lower'}, {locale: 'en', usage: 'sort', sensitivity: 'case', ignorePunctuation: true, numeric: true, caseFirst: 'lower'}]), true);




shouldBe(Intl.Collator.length, 0);




shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator, 'prototype').writable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator, 'prototype').enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator, 'prototype').configurable, false);




shouldBe(Intl.Collator.supportedLocalesOf.length, 1);


shouldBe(Intl.Collator.supportedLocalesOf() instanceof Array, true);

shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf.call(null, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf.call({}, 'en')), '["en"]');
shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf.call(1, 'en')), '["en"]');

shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf(9)), '[]');

shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf('en')), '["en"]');

shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf({ length: 4, 1: 'en', 0: 'es', 3: 'de' })), '["es","en","de"]');

shouldBe(JSON.stringify(Intl.Collator.supportedLocalesOf(['en', 'pt', 'en', 'es'])), '["en","pt","es"]');

shouldBe(
    JSON.stringify(Intl.Collator.supportedLocalesOf('En-laTn-us-variAnt-fOObar-1abc-U-kn-tRue-A-aa-aaa-x-RESERVED')),
    $vm.icuVersion() >= 67
        ? '["en-Latn-US-1abc-foobar-variant-a-aa-aaa-u-kn-x-reserved"]'
        : '["en-Latn-US-variant-foobar-1abc-a-aa-aaa-u-kn-x-reserved"]'
);

shouldThrow(() => Intl.Collator.supportedLocalesOf(Object.create(null, { length: { get() { throw Error() } } })), Error);
shouldThrow(() => Intl.Collator.supportedLocalesOf(Object.create(null, { length: { value: 1 }, 0: { get() { throw Error() } } })), Error);
shouldThrow(() => Intl.Collator.supportedLocalesOf([ { toString() { throw Error() } } ]), Error);

shouldThrow(() => Intl.Collator.supportedLocalesOf('no-bok'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-some-thing'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf([ 5 ]), TypeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf(''), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('a'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('abcdefghij'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('#$'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-@-abc'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-u'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-u-kn-true-u-ko-true'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-x'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-*'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en-'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('en--US'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('i-klingon'), RangeError); 
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-en-US-12345'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-12345-12345-en-US'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-en-US-12345-12345'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-en-u-foo'), RangeError);
shouldThrow(() => Intl.Collator.supportedLocalesOf('x-en-u-foo-u-bar'), RangeError);


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
    shouldNotThrow(() => Intl.Collator.supportedLocalesOf(validLanguageTag));




shouldBe(Object.getPrototypeOf(Intl.Collator.prototype), Object.prototype);



shouldBe(Intl.Collator.prototype.constructor, Intl.Collator);



shouldBe(Intl.Collator.prototype[Symbol.toStringTag], 'Intl.Collator');
shouldBe(Object.prototype.toString.call(Intl.Collator.prototype), '[object Intl.Collator]');

shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, Symbol.toStringTag).writable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, Symbol.toStringTag).enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, Symbol.toStringTag).configurable, true);




var defaultCollator = Intl.Collator('en');
shouldBe(defaultCollator.compare instanceof Function, true);


shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, 'compare').get instanceof Function, true);


shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, 'compare').set, undefined);


shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, 'compare').enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Intl.Collator.prototype, 'compare').configurable, true);


shouldBe(Intl.Collator().compare.length, 2);


shouldThrow(() => Intl.Collator.prototype.compare, TypeError);
shouldThrow(() => Object.defineProperty({}, 'compare', Object.getOwnPropertyDescriptor(Intl.Collator.prototype, 'compare')).compare, TypeError);


shouldBe(new Intl.Collator().compare !== new Intl.Collator().compare, true);











var badCalls = 0;
shouldThrow(() => defaultCollator.compare({ toString() { throw new Error(); } }, { toString() { ++badCalls; return ''; } }), Error);
shouldBe(badCalls, 0);



shouldThrow(() => defaultCollator.compare('a', { toString() { throw new Error(); } }), Error);


shouldBe(defaultCollator.compare.call(null, 'a', 'b'), -1);
shouldBe(defaultCollator.compare.call(Intl.Collator('en', { sensitivity:'base' }), 'A', 'a'), 1);
shouldBe(defaultCollator.compare.call(5, 'a', 'b'), -1);


shouldBe(defaultCollator.compare(), 0);
shouldBe(defaultCollator.compare('undefinec'), -1);
shouldBe(defaultCollator.compare('undefinee'), 1);


shouldBe(Intl.Collator('en').compare('ä', 'z'), -1);
shouldBe(Intl.Collator('sv').compare('ä', 'z'), 1);


shouldBe(Intl.Collator('de').compare('ö', 'od'), -1);
shouldBe(Intl.Collator('de-u-co-phonebk').resolvedOptions().collation != 'phonebk' || Intl.Collator('de-u-co-phonebk').compare('ö', 'od') == 1, true);


var sortCompare = Intl.Collator('en', {usage: 'sort'}).compare;
shouldBe(JSON.stringify(['A', 'B', 'C', 'a', 'b', 'c'].sort(sortCompare)), '["a","A","b","B","c","C"]');

var searchCompare = Intl.Collator('en', {usage: 'search', sensitivity: 'base'}).compare;
shouldBe(JSON.stringify(['A', 'B', 'C', 'a', 'b', 'c'].filter(x => (searchCompare(x, 'b') == 0))), '["B","b"]');


var baseCompare = Intl.Collator('en', {sensitivity: 'base'}).compare;
shouldBe(baseCompare('a', 'b'), -1);
shouldBe(baseCompare('a', 'ä'), 0);
shouldBe(baseCompare('a', 'A'), 0);
shouldBe(baseCompare('a', 'ⓐ'), 0);

var accentCompare = Intl.Collator('en', {sensitivity: 'accent'}).compare;
shouldBe(accentCompare('a', 'b'), -1);
shouldBe(accentCompare('a', 'ä'), -1);
shouldBe(accentCompare('a', 'A'), 0);
shouldBe(accentCompare('a', 'ⓐ'), 0);

var caseCompare = Intl.Collator('en', {sensitivity: 'case'}).compare;
shouldBe(caseCompare('a', 'b'), -1);
shouldBe(caseCompare('a', 'ä'), 0);
shouldBe(caseCompare('a', 'A'), -1);
shouldBe(caseCompare('a', 'ⓐ'), 0);

var variantCompare = Intl.Collator('en', {sensitivity: 'variant'}).compare;
shouldBe(variantCompare('a', 'b'), -1);
shouldBe(variantCompare('a', 'ä'), -1);
shouldBe(variantCompare('a', 'A'), -1);
shouldBe(variantCompare('a', 'ⓐ'), -1);


var nonNumericCompare = Intl.Collator('en', {numeric: false}).compare;
shouldBe(nonNumericCompare('1', '2'), -1);
shouldBe(nonNumericCompare('2', '10'), 1);
shouldBe(nonNumericCompare('01', '1'), -1);
shouldBe(nonNumericCompare('๑', '๒'), -1);
shouldBe(nonNumericCompare('๒', '๑๐'), 1);
shouldBe(nonNumericCompare('๐๑', '๑'), -1);

var numericCompare = Intl.Collator('en', {numeric: true}).compare;
shouldBe(numericCompare('1', '2'), -1);
shouldBe(numericCompare('2', '10'), -1);
shouldBe(numericCompare('01', '1'), 0);
shouldBe(numericCompare('๑', '๒'), -1);
shouldBe(numericCompare('๒', '๑๐'), -1);
shouldBe(numericCompare('๐๑', '๑'), 0);


shouldBe(Intl.Collator('en', {caseFirst: 'upper'}).compare('a', 'A'), 1);
shouldBe(Intl.Collator('en', {caseFirst: 'lower'}).compare('a', 'A'), -1);
shouldBe(Intl.Collator('en', {caseFirst: 'false'}).compare('a', 'A'), -1);


var notIgnorePunctuationCompare = Intl.Collator('en', {ignorePunctuation: false}).compare;
var ignorePunctuationCompare = Intl.Collator('en', {ignorePunctuation: true}).compare;
var punctuations = ['\'', '"', ':', ';', ',', '-', '!', '.', '?'];
for (let punctuation of punctuations) {
    shouldBe(notIgnorePunctuationCompare('ab', `a${punctuation}a`), 1);
    shouldBe(notIgnorePunctuationCompare('ab', `a${punctuation}b`), 1);
    shouldBe(notIgnorePunctuationCompare('ab', `a${punctuation}c`), 1);

    shouldBe(ignorePunctuationCompare('ab', `a${punctuation}a`), 1);
    shouldBe(ignorePunctuationCompare('ab', `a${punctuation}b`), 0);
    shouldBe(ignorePunctuationCompare('ab', `a${punctuation}c`), -1);
}


shouldBe(ignorePunctuationCompare('ab', 'a b'), 0);


shouldBe(Intl.Collator('en').compare('A\u0308', '\u00c4'), 0); 
shouldBe(Intl.Collator('en').compare('A\u0327\u030a', '\u212b\u0327'), 0); 



shouldBe(Intl.Collator.prototype.resolvedOptions.length, 0);


shouldBe(defaultCollator.resolvedOptions() instanceof Object, true);


shouldBe(defaultCollator.resolvedOptions() !== defaultCollator.resolvedOptions(), true);


shouldThrow(() => Intl.Collator.prototype.resolvedOptions.call(5), TypeError);


{
    let options = defaultCollator.resolvedOptions();
    delete options.locale;
    shouldBe(JSON.stringify(options), '{"usage":"sort","sensitivity":"variant","ignorePunctuation":false,"collation":"default","numeric":false,"caseFirst":"false"}');
}

shouldBe(new Intl.Collator('de-u-kn-false-kf-upper-co-phonebk-hc-h12').resolvedOptions().locale, 'de-u-co-phonebk-kf-upper-kn-false');
