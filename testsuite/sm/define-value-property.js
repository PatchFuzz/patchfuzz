
if (!this.hasOwnProperty('Intl'))
    quit();

Object.prototype.get = 5;
new Intl.Collator().resolvedOptions();

Intl.DateTimeFormat.supportedLocalesOf('en');
