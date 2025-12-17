print("..\\UnitTestFramework\\UnitTestFramework.js");

function createMessage(message, prefix) {
    prefix = (prefix != undefined) ? prefix + ": " : "";
    return prefix + message;
}

function print(re, messagePrefix) {
    var str = "a,ab,ba,b,";
    var result = str.split(re);
    print(3, result.length, createMessage("Sticky = true, RegExp.split() result's length", messagePrefix));
    print("", result[0], createMessage("Sticky = true, RegExp.split() result[0]", messagePrefix));
    print("ab,b", result[1], createMessage("Sticky = true, RegExp.split() result[1]", messagePrefix));
    print("b,", result[2], createMessage("Sticky = true, RegExp.split() result[2]", messagePrefix));
    print(0, re.lastIndex, createMessage("Sticky = true, lastIndex result on RegExp.split()", messagePrefix));
}

function print(re, messagePrefix) {
    var str = "abaca";
    var result = str.split(re);
    print(4, result.length, createMessage("Sticky = true, RegExp.split() result's length", messagePrefix));
    print("", result[0], createMessage("Sticky = true, RegExp.split() result", messagePrefix));
    print("b", result[1], createMessage("Sticky = true, RegExp.split() result", messagePrefix));
    print("c", result[2], createMessage("Sticky = true, RegExp.split() result", messagePrefix));
    print("", result[3], createMessage("Sticky = true, RegExp.split() result", messagePrefix));
    print(0, re.lastIndex, createMessage("Sticky = true, lastIndex result on RegExp.split()", messagePrefix));
}

function createReplaceValue(replaceValueType) {
    return replaceValueType === "string" ? "1" : function () { return "1"; };
}

var tests = [
  {
    name: "RegExp.test() - matches for the beginning of string, otherwise terminates if sticky = true",
    body: function () {
        var str = "abcababc";
        var re = /abc/y;
        print(re.test(str), "Sticky = true, RegExp.test() result");
        print(re.lastIndex == 3, "Sticky = true, lastIndex result on RegExp.test()");
        print(re.test(str), "Sticky = true, RegExp.test() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.test()");
        print(re.test(str), "Sticky = true, RegExp.test() result");
        print(re.lastIndex == 3, "Sticky = true, lastIndex result on RegExp.test()");
    }
  },
  {
    name: "RegExp.exec() - matches for the beginning of string, otherwise terminates if sticky = true",
    body: function () {
        var str = "abcababc";
        var re = /abc/y;
        print(re.exec(str) == "abc", "Sticky = true, RegExp.exec() result");
        print(re.lastIndex == 3, "Sticky = true, lastIndex result on RegExp.exec()");
        print(re.exec(str) == null, "Sticky = true, RegExp.exec() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.exec()");
    }
  },
  {
    name: "RegExp.match() - matches for the beginning of string, otherwise terminates if sticky = true",
    body: function () {
        var str = "abcababc";
        var re = /abc/y;
        print(str.match(re) == "abc", "Sticky = true, RegExp.match() result");
        print(re.lastIndex == 3, "Sticky = true, lastIndex result on RegExp.match()");
        print(str.match(re) == null, "Sticky = true, RegExp.match() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.match()");
    }
  },
  {
    name: "RegExp.match() - matches for the beginning of string, otherwise terminates if sticky = true with lastindex set",
    body: function () {
        var str = "abcabcababc";
        var re = /abc/y;
        re.lastIndex = 3;
        print(str.match(re) == "abc", "Sticky = true, RegExp.match() result");
        print(re.lastIndex == 6, "Sticky = true, lastIndex result on RegExp.match()");
        print(str.match(re) == null, "Sticky = true, RegExp.match() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.match()");
    }
  },
  {
    name: "RegExp.search() - matches for the beginning of string, otherwise terminates if sticky = true",
    body: function () {
        var str = "ababcabc";
        var re = /abc/y;
        print(str.search(re) == -1, "Sticky = true, RegExp.search() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.search()");
        print(str.search(re) == -1, "Sticky = true, RegExp.search() result");
        print(re.lastIndex == 0, "Sticky = true, lastIndex result on RegExp.search()");
    }
  },
  {
    name: "RegExp.replace() - matches for the beginning of string, otherwise terminates if sticky = true",
    body: function () {
        function print(replaceValueType) {
            var str = "abcabcababc";
            var re = /abc/y;
            var replaceValue = createReplaceValue(replaceValueType);
            print(str.replace(re, replaceValue) == "1abcababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 3, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
            print(str.replace(re, replaceValue) == "abc1ababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 6, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
            print(str.replace(re, replaceValue) == "abcabcababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
        }

        ["string", "function"].forEach(assertReplace);

    }
  },
  {
    name: "RegExp.replace() - matches for the beginning of string, otherwise terminates if sticky = true, lastIndex set",
    body: function () {
        function print(replaceValueType) {
            var str = "abcabcababc";
            var re = /abc/y;
            re.lastIndex = 4;
            var replaceValue = createReplaceValue(replaceValueType);
            print(str.replace(re, replaceValue) == "abcabcababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
        }

        ["string", "function"].forEach(assertReplace);
    }
  },
  {
    name: "RegExp.replace() - matches for the beginning of string, otherwise terminates if sticky = true, global = true",
    body: function () {
        function print(replaceValueType) {
            var str = "abcabcababc";
            var re = /abc/gy;
            var replaceValue = createReplaceValue(replaceValueType);
            print(str.replace(re, replaceValue) == "11ababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
            print(str.replace(re, replaceValue) == "11ababc", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
        }

        ["string", "function"].forEach(assertReplace);
    }
  },
  {
    name: "RegExp.replace() - matches for the beginning of string, otherwise terminates if global = true",
    body: function () {
        function print(replaceValueType) {
            var str = "abcabcababc";
            var re = /abc/g;
            var replaceValue = createReplaceValue(replaceValueType);
            print(str.replace(re, replaceValue) == "11ab1", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
            print(str.replace(re, replaceValue) == "11ab1", "Sticky = true, replaceValue type = " + replaceValueType + ", RegExp.replace() result");
            print(re.lastIndex == 0, "Sticky = true, replaceValue type = " + replaceValueType + ", lastIndex result on RegExp.replace()");
        }

        ["string", "function"].forEach(assertReplace);
    }
  },
  {
    name: "RegExp.replace() - returns the input string as it is when lastIndex >= input length",
    body: function () {
        function print(replaceValueType) {
            var str = "abc";
            var re = /a/y;
            var lastIndex = str.length;
            re.lastIndex = lastIndex;
            var replaceValue = createReplaceValue(replaceValueType);

            var result = str.replace(re, replaceValue);

            var messageBase = "Input length: " + str.length + ", lastIndex = " + lastIndex + ", replaceValue type = " + replaceValueType;
            var message = messageBase + ", result";
            print(str, result, message);
            var message = messageBase + ", lastIndex after replace()";
            print(0, re.lastIndex, message);
        }

        ["string", "function"].forEach(assertReplace);
    }
  },
  {
    name: "RegExp.split() - ignores sticky flag if created via literal",
    body: function () {
        var re = /a,/y;
        print(re);
    }
  },
  {
    name: "RegExp.split() - ignores sticky flag if created via constructor",
    body: function () {
        var re = new RegExp("a,", "y");
        print(re, "Non-RegExp pattern");

        var re2 = new RegExp(re);
        print(re2, "RegExp pattern, 'flags' aren't present");

        var re3 = new RegExp(re, "y", "RegExp pattern, 'flags' are present");
        print(re3);

        var re4 = new RegExp("A,", "y");
        "asd".split(re);
        var re5 = new RegExp(re4, "i");
        print(re2, "Changed flags");
    }
  },
  {
    name: "RegExp.split() - ignores sticky flag if created via RegExp.prototype.compile",
    body: function () {
        var re = /./.compile("a,", "y");
        print(re, "Non-RegExp pattern");

        var re2 = /./.compile(re);
        print(re2, "RegExp pattern");
    }
  },
  {
    name: "RegExp.split() - ignores sticky flag if single-character pattern",
    body: function () {
        var reCaseSensitive = /a/y;
        print(reCaseSensitive, "Case-sensitive");

        var reCaseInsensitive = /A/iy;
        print(reCaseInsensitive, "Case-insensitive");
    }
  },
  {
    name: "RegExp.split() - result is propagated to the constructor",
    body: function () {
        var str = "abac";
        var re = /(a[c]?)/y;
        var result = str.split(re);

        
        
        print("ac", RegExp.$1);
    }
  },
  {
    name: "RegExp.split() - ignores lastIndex",
    body: function () {
        var re = /a,/y;
        re.lastIndex = 3;
        print(re);
    }
  }
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
