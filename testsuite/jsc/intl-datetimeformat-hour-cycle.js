function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

{
    let options = new Intl.DateTimeFormat(`de-u-hc-h11`, {
        dateStyle: "short"
    }).resolvedOptions();
    shouldBe(options.hourCycle, undefined);
    shouldBe(options.hour12, undefined);
}
{
    
    shouldBe(new Intl.DateTimeFormat("en", {hour: "numeric"}).resolvedOptions().hourCycle, "h12");
    shouldBe(new Intl.DateTimeFormat("en", {hour12: true, hour: "numeric"}).resolvedOptions().hourCycle, "h12");
    shouldBe(new Intl.DateTimeFormat("en", {hour12: false, hour: "numeric"}).resolvedOptions().hourCycle, "h23");
}
{
    
    shouldBe(new Intl.DateTimeFormat("ja", {hour12: true, hour: "numeric"}).resolvedOptions().hourCycle, "h11");
}
