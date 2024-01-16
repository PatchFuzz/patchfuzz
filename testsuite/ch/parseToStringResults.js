











if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

function testDate(isoDateString) {
    let Dateobj = new Date(isoDateString);
    let value = Dateobj.valueOf();
    let str = Dateobj.toString();

    assert.areEqual(value, Date.parse(str), "Date.parse('" + str + "') returns wrong value.");
}

let tests = [{
    name: "test if Date.parse() can correctly parse outputs of Date.toString()",
    body: function () {
        testDate("0001-10-13T05:16:33Z");
        testDate("0011-10-13T05:16:33Z");
        testDate("0111-10-13T05:16:33Z");
        testDate("1111-10-13T05:16:33Z");

        
        testDate("-000001-11-13T19:40:33Z");
        testDate("-000011-11-13T19:40:33Z");
        testDate("-000111-11-13T19:40:33Z");
        testDate("-001111-11-13T19:40:33Z");
    }
}];

testRunner.run(tests, { verbose: WScript.Arguments[0] != "summary" });
