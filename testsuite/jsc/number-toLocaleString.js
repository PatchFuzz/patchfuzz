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

shouldBe(Number.prototype.toLocaleString.length, 0);
shouldBe(Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').enumerable, false);
shouldBe(Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').configurable, true);
shouldBe(Object.getOwnPropertyDescriptor(Number.prototype, 'toLocaleString').writable, true);


shouldNotThrow(() => Number.prototype.toLocaleString.call(0));
shouldNotThrow(() => Number.prototype.toLocaleString.call(NaN));
shouldNotThrow(() => Number.prototype.toLocaleString.call(Infinity));
shouldNotThrow(() => Number.prototype.toLocaleString.call(new Number));
shouldThrow(() => Number.prototype.toLocaleString.call(), TypeError);
shouldThrow(() => Number.prototype.toLocaleString.call(undefined), TypeError);
shouldThrow(() => Number.prototype.toLocaleString.call(null), TypeError);
shouldThrow(() => Number.prototype.toLocaleString.call('1'), TypeError);
shouldThrow(() => Number.prototype.toLocaleString.call([]), TypeError);
shouldThrow(() => Number.prototype.toLocaleString.call(Symbol()), TypeError);

shouldBe((0).toLocaleString(), '0');
shouldBe(new Number(1).toLocaleString(), '1');


shouldThrow(() => (0).toLocaleString('i'), RangeError);
shouldBe(Infinity.toLocaleString(), '∞');


shouldBe((123456.789).toLocaleString('ar'), '١٢٣٬٤٥٦٫٧٨٩');
shouldBe((123456.789).toLocaleString('zh-Hans-CN-u-nu-hanidec'), '一二三,四五六.七八九');


shouldBe((123.456).toLocaleString('en', { maximumSignificantDigits: 3 }), '123');
