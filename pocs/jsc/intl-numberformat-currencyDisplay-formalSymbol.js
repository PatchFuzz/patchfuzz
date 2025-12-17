function shouldBe(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}




{
    const nf = new Intl.NumberFormat("zh-TW", {
        style: "currency",
        currency: "TWD",
        currencyDisplay: "formalSymbol",
    });
    shouldBe(nf.format(42), "NT$42.00");
}

