

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldBeOneOf(actual, expectedArray) {
    if (!expectedArray.some((value) => value === actual))
        throw new Error('bad value: ' + actual + ' expected values: ' + expectedArray);
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

function test() {
    {
        

        
        shouldBe(Intl.DurationFormat instanceof Function, true);

        

        
        shouldThrow(() => Intl.DurationFormat(), TypeError);
        shouldThrow(() => Intl.DurationFormat.call({}), TypeError);

        shouldThrow(() => new Intl.DurationFormat('$'), RangeError);
        shouldThrow(() => new Intl.DurationFormat('en', null), TypeError);
        shouldBe(new Intl.DurationFormat() instanceof Intl.DurationFormat, true);

        
        {
            class DerivedDurationFormat extends Intl.DurationFormat {};
            shouldBe((new DerivedDurationFormat) instanceof DerivedDurationFormat, true);
            shouldBe((new DerivedDurationFormat) instanceof Intl.DurationFormat, true);
            shouldBeOneOf(new DerivedDurationFormat('en').format({ hours: 1, minutes: 2, seconds: 3, milliseconds: 4, microseconds: 5, nanoseconds: 6 }), [
                `1 hr, 2 min, 3 sec, 4 ms, 5 μs, 6 ns`,
                `1 hr, 2 min, 3 sec, 4 ms, 5 µs, 6 ns`,
            ]);
            shouldBe(Object.getPrototypeOf(new DerivedDurationFormat), DerivedDurationFormat.prototype);
            shouldBe(Object.getPrototypeOf(Object.getPrototypeOf(new DerivedDurationFormat)), Intl.DurationFormat.prototype);
        }

        

        
        shouldBe(Intl.DurationFormat.length, 0);

        

        
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat, 'prototype').writable, false);
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat, 'prototype').enumerable, false);
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat, 'prototype').configurable, false);

        

        
        shouldBe(Intl.DurationFormat.supportedLocalesOf.length, 1);

        
        shouldBe(Intl.DurationFormat.supportedLocalesOf() instanceof Array, true);
        
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf.call(null, 'en')), '["en"]');
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf.call({}, 'en')), '["en"]');
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf.call(1, 'en')), '["en"]');
        
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf(9)), '[]');
        
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf('en')), '["en"]');
        
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf({ length: 4, 1: 'en', 0: 'es', 3: 'de' })), '["es","en","de"]');
        
        shouldBe(JSON.stringify(Intl.DurationFormat.supportedLocalesOf([ 'en', 'pt', 'en', 'es' ])), '["en","pt","es"]');
        
        shouldBe(
            JSON.stringify(Intl.DurationFormat.supportedLocalesOf('En-laTn-us-variAnt-fOObar-1abc-U-kn-tRue-A-aa-aaa-x-RESERVED')),
            $vm.icuVersion() >= 67
                ? '["en-Latn-US-1abc-foobar-variant-a-aa-aaa-u-kn-x-reserved"]'
                : '["en-Latn-US-variant-foobar-1abc-a-aa-aaa-u-kn-x-reserved"]'
        );
        
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf(Object.create(null, { length: { get() { throw new Error(); } } })), Error);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf(Object.create(null, { length: { value: 1 }, 0: { get() { throw new Error(); } } })), Error);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf([ { toString() { throw new Error(); } } ]), Error);
        
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('no-bok'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-some-thing'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf([ 5 ]), TypeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf(''), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('a'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('abcdefghij'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('#$'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-@-abc'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-u'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-u-kn-true-u-ko-true'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-x'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-*'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en-'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('en--US'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('i-klingon'), RangeError); 
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-en-US-12345'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-12345-12345-en-US'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-en-US-12345-12345'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-en-u-foo'), RangeError);
        shouldThrow(() => Intl.DurationFormat.supportedLocalesOf('x-en-u-foo-u-bar'), RangeError);

        
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
            shouldNotThrow(() => Intl.DurationFormat.supportedLocalesOf(validLanguageTag));

        

        
        shouldBe(Object.getPrototypeOf(Intl.DurationFormat.prototype), Object.prototype);

        
        
        shouldBe(Intl.DurationFormat.prototype.constructor, Intl.DurationFormat);

        
        
        shouldBe(Intl.DurationFormat.prototype[Symbol.toStringTag], 'Intl.DurationFormat');
        shouldBe(Object.prototype.toString.call(Intl.DurationFormat.prototype), '[object Intl.DurationFormat]');
        
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat.prototype, Symbol.toStringTag).writable, false);
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat.prototype, Symbol.toStringTag).enumerable, false);
        shouldBe(Object.getOwnPropertyDescriptor(Intl.DurationFormat.prototype, Symbol.toStringTag).configurable, true);
    }
    {
        const df = new Intl.DurationFormat("en", {
            style: "long",
        });
        shouldBe(df.format({ hours: 2 }), `2 hours`);
        shouldThrow(() => df.format(), TypeError);
        shouldThrow(() => df.format({}), TypeError);
        shouldThrow(() => df.format([]), TypeError);
        shouldThrow(() => df.format(42), TypeError);
        shouldThrow(() => df.format("Apple"), RangeError);
        shouldThrow(() => df.format(null), TypeError);
        shouldThrow(() => df.format(undefined), TypeError);
        shouldThrow(() => df.format([null]), TypeError);
        shouldBe(JSON.stringify(df.resolvedOptions()), `{"locale":"en","style":"long","years":"long","yearsDisplay":"auto","months":"long","monthsDisplay":"auto","weeks":"long","weeksDisplay":"auto","days":"long","daysDisplay":"auto","hours":"long","hoursDisplay":"auto","minutes":"long","minutesDisplay":"auto","seconds":"long","secondsDisplay":"auto","milliseconds":"long","millisecondsDisplay":"auto","microseconds":"long","microsecondsDisplay":"auto","nanoseconds":"long","nanosecondsDisplay":"auto","fractionalDigits":0,"numberingSystem":"latn"}`);
        shouldBe(JSON.stringify(Reflect.getOwnPropertyDescriptor(Intl.DurationFormat.prototype, Symbol.toStringTag)), `{"value":"Intl.DurationFormat","writable":false,"enumerable":false,"configurable":true}`);
    }
    {
        const duration = { hours: 1, minutes: 2, seconds: 3 };
        shouldBe(new Intl.DurationFormat('en-GB', { style: 'long' }).format(duration), `1 hour, 2 minutes, 3 seconds`);
        shouldBeOneOf(new Intl.DurationFormat('en-GB', { style: 'short' }).format(duration), [`1 hr, 2 min, 3 secs`, `1 hr, 2 mins, 3 secs`]);
        shouldBe(new Intl.DurationFormat('en-GB', { style: 'narrow' }).format(duration), `1h 2m 3s`);
        shouldBe(new Intl.DurationFormat('en-GB', { style: 'digital' }).format(duration), `1:02:03`);
    }
    {
        const duration = { hours: 1, minutes: 2, seconds: 3 };
        shouldBeOneOf(new Intl.DurationFormat('ja-JP', { style: 'long' }).format(duration), [`1時間 2分 3秒`, `1 時間 2 分 3 秒`]);
        shouldBeOneOf(new Intl.DurationFormat('ja-JP', { style: 'short' }).format(duration), [`1時間 2分 3秒`, `1 時間 2 分 3 秒`]);
        shouldBeOneOf(new Intl.DurationFormat('ja-JP', { style: 'narrow' }).format(duration), [`1時間2分3秒`, `1h2m3s`]);
        shouldBe(new Intl.DurationFormat('ja-JP', { style: 'digital' }).format(duration), `1:02:03`);
        shouldBeOneOf(new Intl.DurationFormat('ja-JP-u-nu-hanidec', { style: 'long' }).format(duration), [`一時間 二分 三秒`, `一 時間 二 分 三 秒`]);
        shouldBeOneOf(new Intl.DurationFormat('ja-JP-u-nu-hanidec', { style: 'short' }).format(duration), [`一時間 二分 三秒`, `一 時間 二 分 三 秒`]);
        shouldBeOneOf(new Intl.DurationFormat('ja-JP-u-nu-hanidec', { style: 'narrow' }).format(duration), [`一時間二分三秒`, `一h二m三s`]);
        shouldBe(new Intl.DurationFormat('ja-JP-u-nu-hanidec', { style: 'digital' }).format(duration), `一:〇二:〇三`);
    }
    {
        const duration = { hours: 1, minutes: 2, seconds: 3 };
        const expected = [
            {"type":"integer","value":"1","unit":"hour"},
            {"type":"literal","value":" ","unit":"hour"},
            {"type":"unit","value":"hour","unit":"hour"},
            {"type":"literal","value":", "},
            {"type":"integer","value":"2","unit":"minute"},
            {"type":"literal","value":" ","unit":"minute"},
            {"type":"unit","value":"minutes","unit":"minute"},
            {"type":"literal","value":", "},
            {"type":"integer","value":"3","unit":"second"},
            {"type":"literal","value":" ","unit":"second"},
            {"type":"unit","value":"seconds","unit":"second"}
        ];

        const df = new Intl.DurationFormat('en-GB', { style: 'long' });
        const parts = df.formatToParts(duration);
        shouldBe(parts.length, expected.length);
        for (let i = 0; i < parts.length; ++i) {
            shouldBe(parts[i].type, expected[i].type);
            shouldBe(parts[i].value, expected[i].value);
        }

        shouldThrow(() => df.formatToParts(), TypeError);
        shouldThrow(() => df.formatToParts([]), TypeError);
        shouldThrow(() => df.formatToParts("Apple"), RangeError);
        shouldThrow(() => df.formatToParts(42), TypeError);
        shouldThrow(() => df.formatToParts(null), TypeError);
        shouldThrow(() => df.formatToParts(undefined), TypeError);
        shouldThrow(() => df.formatToParts([null]), TypeError);
    }
}

if (typeof Intl.DurationFormat !== 'undefined')
    test();
