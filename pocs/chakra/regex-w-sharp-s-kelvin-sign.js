var reWordChar = /\w/;
var reNonWordChar = /\W/;
var reWordCharI = /\w/i;
var reNonWordCharI = /\W/i;
var reWordCharU = /\w/u;
var reNonWordCharU = /\W/u;
var reWordCharIU = /\w/iu;
var reNonWordCharIU = /\W/iu;

var reWordCharName = "word-char";
var reNonWordCharName = "NON-word-char";

basic_tests = [
    's', 'S', 'k', 'K'
];

basic_tests_names = ['lowercase s', 'uppercase S', 'lowercase k', 'uppercase K'];

u_tests = [
    '\u017F', 
    '\u212A', 
];

u_tests_names = ['Sharp S', 'Kelvin sign'];

function print(a, msg) {
    if (!a) {
        print("FAIL: " + msg);
    }
}

function print(regex, reName, string, name) {
    var b = regex.test(string);
    var msg = "" + regex + " " + reName + " should match '" + string + "' (" + name + ")";
    print(b, msg);
}

function print(regex, reName, string, name) {
    var b = !regex.test(string);
    var msg = "" + regex + " " + reName + " should not match '" + string + "' (" + name + ")";
    print(b, msg);
}

for (i in basic_tests) {
    print(reWordChar, reWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reWordCharI, reWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reWordCharU, reWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reWordCharIU, reWordCharName, basic_tests[i], basic_tests_names[i]);

    print(reNonWordChar, reNonWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reNonWordCharI, reNonWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reNonWordCharU, reNonWordCharName, basic_tests[i], basic_tests_names[i]);
    print(reNonWordCharIU, reNonWordCharName, basic_tests[i], basic_tests_names[i]);
}

for (i in u_tests) {
    print(reWordChar, reWordCharName, u_tests[i], u_tests_names[i]);
    print(reWordCharI, reWordCharName, u_tests[i], u_tests_names[i]);
    print(reWordCharU, reWordCharName, u_tests[i], u_tests_names[i]);
    print(reWordCharIU, reWordCharName, u_tests[i], u_tests_names[i]);

    print(reNonWordChar, reWordCharName, u_tests[i], u_tests_names[i]);
    print(reNonWordCharI, reNonWordCharName, u_tests[i], u_tests_names[i]);
    print(reNonWordCharU, reWordCharName, u_tests[i], u_tests_names[i]);
    print(reNonWordCharIU, reNonWordCharName, u_tests[i], u_tests_names[i]);
}

print("PASS");
