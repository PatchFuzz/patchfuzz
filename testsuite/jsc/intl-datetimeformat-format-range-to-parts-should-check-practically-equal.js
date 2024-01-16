






























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function* zip(a, b) {
    shouldBe(a.length, b.length);
    for (let i = 0; i < a.length; ++i) {
        yield [i, a[i], b[i]];
    }
}

function compare(actual, expected) {
    for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
        shouldBe(actualEntry.type, expectedEntry.type);
        shouldBe(actualEntry.value, expectedEntry.value);
    }
}

if ($vm.icuHeaderVersion() >= 64) {
    {
        const date = new Date(2019, 7, 10,  1, 2, 3, 234);

        let dtf = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
        compare(dtf.formatRangeToParts(date, date), dtf.formatToParts(date));

        dtf = new Intl.DateTimeFormat("en", { minute: "numeric", second: "numeric" });
        compare(dtf.formatRangeToParts(date, date), dtf.formatToParts(date));

        dtf = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", minute: "numeric" });
        compare(dtf.formatRangeToParts(date, date), dtf.formatToParts(date));

        dtf = new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" });
        compare(dtf.formatRangeToParts(date, date), dtf.formatToParts(date));
    }
    {
        
        const date1 = new Date(2019, 7, 10,  1, 2, 3, 234);
        const date2 = new Date(2019, 7, 10,  1, 2, 3, 235);

        let dtf = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
        compare(dtf.formatRangeToParts(date1, date2), dtf.formatToParts(date1));

        dtf = new Intl.DateTimeFormat("en", { minute: "numeric", second: "numeric" });
        compare(dtf.formatRangeToParts(date1, date2), dtf.formatToParts(date1));

        dtf = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", minute: "numeric" });
        compare(dtf.formatRangeToParts(date1, date2), dtf.formatToParts(date1));

        dtf = new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" });
        compare(dtf.formatRangeToParts(date1, date2), dtf.formatToParts(date1));
    }
}
