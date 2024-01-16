



























function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + " " + expected);
}

const nf = new Intl.NumberFormat("en-US");
const nf2 = new Intl.NumberFormat("ja-JP");
const string = "987654321987654321";
const string2 = "987654321987654322";
shouldBe(nf.format(string), `987,654,321,987,654,321`);
shouldBe(nf2.format(string), `987,654,321,987,654,321`);
if (nf.formatRange) {
    shouldBe(nf.formatRange(string, string2), `987,654,321,987,654,321–987,654,321,987,654,322`);
    shouldBe(nf2.formatRange(string, string2), `987,654,321,987,654,321～987,654,321,987,654,322`);
}
if (nf.formatRangeToParts) {
    shouldBe(JSON.stringify(nf.formatRangeToParts(string, string2)), `[{"type":"integer","value":"987","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"654","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"321","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"987","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"654","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"321","source":"startRange"},{"type":"literal","value":"–","source":"shared"},{"type":"integer","value":"987","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"654","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"321","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"987","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"654","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"322","source":"endRange"}]`);
    shouldBe(JSON.stringify(nf2.formatRangeToParts(string, string2)), `[{"type":"integer","value":"987","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"654","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"321","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"987","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"654","source":"startRange"},{"type":"group","value":",","source":"startRange"},{"type":"integer","value":"321","source":"startRange"},{"type":"literal","value":"～","source":"shared"},{"type":"integer","value":"987","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"654","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"321","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"987","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"654","source":"endRange"},{"type":"group","value":",","source":"endRange"},{"type":"integer","value":"322","source":"endRange"}]`);
}
