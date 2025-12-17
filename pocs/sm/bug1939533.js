print(/(?i:[A-Z]{3})/.exec("abcdefg")[0], "abc");
print(/(?i:[A-Z]{4})/.exec("abcdefg")[0], "abcd");
print(/(?i:[A-Z]{5})/.exec("abcdefg")[0], "abcde");
print(/(?i:[A-Z]{6})/.exec("abcdefg")[0], "abcdef");
