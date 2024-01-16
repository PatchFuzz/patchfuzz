






























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

if ($vm.icuHeaderVersion() >= 64) {
    {
        const date = new Date(2019, 7, 10,  1, 2, 3, 234);

        let dtf = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
        shouldBe(dtf.formatRange(date, date), dtf.format(date));

        dtf = new Intl.DateTimeFormat("en", { minute: "numeric", second: "numeric" });
        shouldBe(dtf.formatRange(date, date), dtf.format(date));

        dtf = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", minute: "numeric" });
        shouldBe(dtf.formatRange(date, date), dtf.format(date));

        dtf = new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" });
        shouldBe(dtf.formatRange(date, date), dtf.format(date));
    }

    {
        
        const date1 = new Date(2019, 7, 10,  1, 2, 3, 234);
        const date2 = new Date(2019, 7, 10,  1, 2, 3, 235);

        shouldBe(date1.getTime() !== date2.getTime(), true);

        let dtf = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
        shouldBe(dtf.formatRange(date1, date2), dtf.format(date1));

        dtf = new Intl.DateTimeFormat("en", { minute: "numeric", second: "numeric" });
        shouldBe(dtf.formatRange(date1, date2), dtf.format(date1));

        dtf = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", minute: "numeric" });
        shouldBe(dtf.formatRange(date1, date2), dtf.format(date1));

        dtf = new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" });
        shouldBe(dtf.formatRange(date1, date2), dtf.format(date1));
    }
}
