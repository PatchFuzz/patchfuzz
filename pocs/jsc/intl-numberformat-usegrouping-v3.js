function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}

let validUseGrouping = [
    "min2",
    "auto",
    "always",
    false,
];

let nonListedUseGrouping = [
    "min-2",
];

let specialUseGrouping = [
    "true",
    "false",
]

validUseGrouping.forEach(function(useGrouping) {
    let nf = new Intl.NumberFormat(undefined, {useGrouping});
    shouldBe(useGrouping, nf.resolvedOptions().useGrouping);
});

nonListedUseGrouping.forEach(function(useGrouping) {
    shouldThrow(() => {
        let nf = new Intl.NumberFormat(undefined, {useGrouping});
        nf.resolvedOptions().useGrouping
    }, `RangeError: useGrouping must be either true, false, "min2", "auto", or "always"`);
});

specialUseGrouping.forEach(function(useGrouping) {
    let nf = new Intl.NumberFormat(undefined, {useGrouping});
    shouldBe("auto", nf.resolvedOptions().useGrouping);
});


shouldBe("auto",
    (new Intl.NumberFormat()).resolvedOptions().useGrouping);
shouldBe("auto",
    (new Intl.NumberFormat(undefined, {useGrouping: undefined}))
    .resolvedOptions().useGrouping);


shouldBe("always",
    (new Intl.NumberFormat(undefined, {useGrouping: true}))
    .resolvedOptions().useGrouping);



shouldBe(false,
    (new Intl.NumberFormat(undefined, {useGrouping: false}))
    .resolvedOptions().useGrouping);
shouldBe(false,
    (new Intl.NumberFormat(undefined, {useGrouping: ""}))
    .resolvedOptions().useGrouping);


let mgd1 = ["en"];

let mgd2 = ["es", "pl", "lv", "et", "bg"];
let all = mgd1.concat(mgd2);


all.forEach(function(locale) {
    let off = new Intl.NumberFormat(locale, {useGrouping: false});
    let msg = "locale: " + locale + " useGrouping: false";
    
    shouldBe(3, off.format(123).length, msg);
    shouldBe(4, off.format(1234).length, msg);
    shouldBe(5, off.format(12345).length, msg);
    shouldBe(6, off.format(123456).length, msg);
    shouldBe(7, off.format(1234567).length, msg);
});


all.forEach(function(locale) {
    let always = new Intl.NumberFormat(locale, {useGrouping: "always"});
    let msg = "locale: " + locale + " useGrouping: 'always'";
    shouldBe(3, always.format(123).length);
    
    shouldBe(4 + 1, always.format(1234).length, msg);
    shouldBe(5 + 1, always.format(12345).length, msg);
    shouldBe(6 + 1, always.format(123456).length, msg);
    shouldBe(7 + 2, always.format(1234567).length, msg);
});


all.forEach(function(locale) {
    let always = new Intl.NumberFormat(locale, {useGrouping: "min2"});
    let msg = "locale: " + locale + " useGrouping: 'min2'";
    shouldBe(3, always.format(123).length);
    
    
    shouldBe(4, always.format(1234).length, msg);
    shouldBe(5 + 1, always.format(12345).length, msg);
    shouldBe(6 + 1, always.format(123456).length, msg);
    shouldBe(7 + 2, always.format(1234567).length, msg);
});


mgd1.forEach(function(locale) {
    let auto = new Intl.NumberFormat(locale, {useGrouping: "auto"});
    let msg = "locale: " + locale + " useGrouping: 'auto'";
    shouldBe(3, auto.format(123).length, msg);
    shouldBe(4 + 1, auto.format(1234).length, msg);
    shouldBe(5 + 1, auto.format(12345).length, msg);
    shouldBe(6 + 1, auto.format(123456).length, msg);
    shouldBe(7 + 2, auto.format(1234567).length, msg);
});
mgd2.forEach(function(locale) {
    let auto = new Intl.NumberFormat(locale, {useGrouping: "auto"});
    let msg = "locale: " + locale + " useGrouping: 'auto'";
    shouldBe(3, auto.format(123).length, msg);
    
    
    
    shouldBe(4, auto.format(1234).length, msg);
    shouldBe(5 + 1, auto.format(12345).length, msg);
    shouldBe(6 + 1, auto.format(123456).length, msg);
    shouldBe(7 + 2, auto.format(1234567).length, msg);
});
