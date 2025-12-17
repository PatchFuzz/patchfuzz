function Run() {
    var intl = new Intl.Collator();
    intl.compare('a','b');
    print('PASS');
}

print(Run);
