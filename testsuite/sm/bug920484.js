load(libdir + "asserts.js");



Object.prototype.localeMatcher = "invalid matcher option";


if (this.hasOwnProperty("Intl")) {
    
    
    
    new Intl.Collator().compare("a", "b");
    new Intl.NumberFormat().format(10);
    new Intl.DateTimeFormat().format(new Date);

    
    new Intl.Collator(void 0, {localeMatcher: "lookup"}).compare("a", "b");
    new Intl.NumberFormat(void 0, {localeMatcher: "lookup"}).format(10);
    new Intl.DateTimeFormat(void 0, {localeMatcher: "lookup"}).format(new Date);

    delete Object.prototype.localeMatcher;

    
    new Intl.Collator().compare("a", "b");
    new Intl.NumberFormat().format(10);
    new Intl.DateTimeFormat().format(new Date);
}
