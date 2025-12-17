function isPatternSyntaxError(pattern) {
    try {
        new RegExp(pattern);
        return false;
    } catch (e) {
        if (!(e instanceof SyntaxError))
            throw e;
        return true;
    }
}


print("1+2".replace("1+2", "$&+3"), "1+2+3");
print("1112".replace("1+2", ""), "1112");


print("leading text^my hat".replace("^my hat", ""), "leading text");
print("my hat".replace("^my hat", ""), "my hat");


print("leading text$my money".replace("leading text$", ""), "my money");
print("leading text".replace("leading text$", ""), "leading text");


var BSL = '\\';
print(("dir C:" + BSL + "Windoze").replace("C:" + BSL, ""),
         "dir Windoze");
print(isPatternSyntaxError("C:" + BSL), true);


print("This is a sentence. It has words.".replace(".", "!"),
         "This is a sentence! It has words.");
print("This is an unterminated sentence".replace(".", ""),
         "This is an unterminated sentence");


print("Video killed the radio *".replace(" *", ""), "Video killed the radio");
print("aaa".replace("a*", ""), "aaa");


print("On the + side".replace(" +", ""), "On the side");
print("1111111111111".replace("1+", ""), "1111111111111");


print(("Inverse cone head: " + BSL + "++/").replace(BSL + "+", ""),
         "Inverse cone head: +/");
print((BSL + BSL + BSL).replace(BSL + "+", ""),
         BSL + BSL + BSL);


print((BSL + BSL + "+").replace(BSL + BSL + "+", ""), "");
print((BSL + BSL + BSL).replace(BSL + BSL + "+", ""), (BSL + BSL + BSL));


print((BSL + BSL + BSL + BSL).replace(BSL + BSL + BSL, ""), BSL);
print(isPatternSyntaxError(BSL + BSL + BSL), true);


print((BSL + BSL + BSL + BSL).replace(BSL + BSL + BSL + BSL, "", "i"), "");
print((BSL + BSL).replace(BSL + BSL + BSL + BSL, ""), BSL + BSL);



print("Pressing question?".replace("?", "."), "Pressing question.");
print("a".replace("a?", ""), "a");


print("(a".replace("(", ""), "a");


print("a)".replace(")", ""), "a");


print("(foo)".replace("(foo)", ""), "");
print("a".replace("(a)", ""), "a");


print("[a".replace("[", ""), "a");


print("a]".replace("]", ""), "a");


print("a".replace("[a-z]", ""), "a");
print("You would write your regexp as [a-z]".replace("[a-z]", ""),
         "You would write your regexp as ");


print("Numbers may be specified in the interval {1,100}".replace("{1,", ""),
         "Numbers may be specified in the interval 100}");


print("Numbers may be specified in the interval {1,100}".replace(",100}", ""),
         "Numbers may be specified in the interval {1");


print("Numbers may be specified in the interval {1,100}".replace(" {1,100}", ""),
         "Numbers may be specified in the interval");
print("aaa".replace("a{1,10}", ""), "aaa");


print("Mr. Gorbachev|Tear down this wall!".replace("|Tear down this wall!", ""),
         "Mr. Gorbachev");
print("foobar".replace("foo|bar", ""), "foobar");

print("PASS");
