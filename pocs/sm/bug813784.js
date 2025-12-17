function get_arg_2() { return arguments[2]; }
function test() { return get_arg_2(1,2,3); }

print(test("a","b","c"), 3);
print(test("a","b","c"), 3);


function arg_len() { return arguments.length; }
function test2() { return arg_len(1,2,3); }

print(test2("a","b","c","d"), 3);
print(test2("a","b","c","d"), 3);


function get_arg() { return arguments; }
function test3() { return get_arg(1,2,3) }

var arg = test3("a","b","c","d","e");
print(arg.length, 3);
print(arg[0], 1);
print(arg[1], 2);
print(arg[2], 3);
var arg = test3("a","b","c","d","e");
print(arg.length, 3);
print(arg[0], 1);
print(arg[1], 2);
print(arg[2], 3);


function return0(a, b, c) { return 0; }
function funapply() { return return0.apply(undefined, arguments); }
function test4() { return funapply(1,2,3) }

print(test4("a","b","c","d","e"), 0);
print(test4("a","b","c","d","e"), 0);


function apply3(a, b, c) {
  print(a,1)
  print(b,2)
  print(c,3)
}
function funapply2() { return apply3.apply(undefined, arguments); }
function test5() { return funapply2(1,2,3) }

test5("a","b","c","d","e");
test5("a","b","c","d","e");


function apply_fun1(a, b, c) { print(c, undefined) }
function funapply3() { return apply_fun1.apply(undefined, arguments); }
function test7() { return funapply3(1,2) }

test7("a","b","c","d","e");
test7("a","b","c","d","e");


var fun;
function apply_fun2(a, b, c) { print(c, undefined) }
function funapply4() { return fun.apply(undefined, arguments); }
function test8() { return funapply4(1,2) }

fun = apply_fun1;
test8("a","b","c","d","e");
fun = apply_fun2;
test8("a","b","c","d","e");
fun = apply_fun1;
test8("a","b","c","d","e");
fun = apply_fun2;
test8("a","b","c","d","e");



function dumpArgs(i) { if (i == 90) return funapply5.arguments.length; return [i]; }
function funapply5() { return dumpArgs.apply(undefined, arguments); }
function test9(i) { return funapply5(i); }

print(test9(89)[0], 89);
print(test9(90), 1);



function notinlined() {
    print(arguments[0], 4);
    print(arguments[1], 5);
    print(arguments[2], 6);
}

function inline2(a) { return notinlined(4,5,6); }
function inline() { return inline2(1,2,3); }
function base1() { return inline(-1,-2,-3); }

base1(10,11,12);
base1(10,11,12);



function inlined(a) {
    if (a == 11) {
        a = undefined;
        return arguments;
    }
}

function inline4(a) { return inlined(a,5,6); }
function inline3(a) { return inline4(a,2,3); }
function base2(a) { return inline3(a,-2,-3); }

var args = base2(10,11,12);
print(args, undefined);
var args = base2(11,11,12);
print(args[0], undefined);
print(args[1], 5);
print(args[2], 6);
var args = base2(10,11,12);
print(args, undefined);
var args = base2(11,11,12);
print(args[0], undefined);
print(args[1], 5);
print(args[2], 6);



function arg_len2() { print(arguments.length, 4); }
function bailing_arg_len(a) {
    if (a == 90) {
        bailout();
        arg_len.apply(undefined, arguments);
    }
    print(arguments.length, 4);
    return arguments;
}
function test10(i) { return bailing_arg_len(i,2,3,4); }

var args = test10(1, "b");
print(args.length, 4)
print(args[0], 1)
print(args[1], 2)
print(args[2], 3)
print(args[3], 4)

var args = test10(90, 'b');
print(args.length, 4)
print(args[0], 90)
print(args[1], 2)
print(args[2], 3)
print(args[3], 4)



function dumpArgs11(i) { return funapply11.arguments; eval(""); }
function funapply11(i) { return dumpArgs11(i); }
function test11(i) { return funapply11(i); }

print(test11(89)[0], 89);
print(test11(90)[0], 90);



function dumpArgs12(i) { if (i == 90) return funapply12.arguments; return [i]; }
function noion12(i) { return dumpArgs12(i); eval(""); }
function funapply12(i) { return noion12(i); }
function test12(i) { return funapply12(i); }

print(test12("89")[0], "89");
print(test12("90")[0], "90");



function f13(i) { if (i == "90") return f13.arguments; return [i]; }
function test13(i,b) { return f13(i,b); }

print(test13("89", 1)[0], "89");
print(test13("90", 2)[1], 2);



function noion14(i) { if (i == 2) { return funapply14.arguments; } return [i]; eval(""); }
function funapply14(i) {  if (i == 90) { i = "2"; } return noion14(i); }
function test14(i) { return funapply14(i); }

print(test14("89")[0], "89");
print(test14("90")[0], "2");
