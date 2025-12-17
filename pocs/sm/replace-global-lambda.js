"use strict";

function testNoCaptureGroups() {
  var s = "a..bb.cba.";
  for (var i = 0; i < 20; i++) {
    var log = "";
    var res = s.replace(/a|b/g, function(...args) {
      print(this, undefined);
      print(args.length, 3);
      print(args[2], s);
      log += "(" + args[0] + args[1] + ")";
      return "X";
    });
    print(res, "X..XX.cXX.");
    print(log, "(a0)(b3)(b4)(b7)(a8)");
  }
}
testNoCaptureGroups();

function testCaptureGroups() {
  var s = "a..bb.cba.";
  for (var i = 0; i < 20; i++) {
    var log = "";
    var res = s.replace(/(a)|(b)/g, function(...args) {
      print(this, undefined);
      print(args.length, 5);
      print(args[4], s);
      log += "(" + args[0] + args[1] + args[2] + args[3] + ")";
      return "X";
    });
    print(res, "X..XX.cXX.");
    print(log, "(aaundefined0)(bundefinedb3)(bundefinedb4)(bundefinedb7)(aaundefined8)");
  }
}
testCaptureGroups();



function testCaptureGroupsChanging() {
  var s = "a..bb.cba.";
  for (var i = 0; i < 20; i++) {
    var log = "";
    var re = /a|b/g;
    var res = s.replace(re, function(...args) {
      print(this, undefined);
      print(args.length, 3);
      print(args[2], s);
      log += "(" + args[0] + args[1] + ")";
      re.compile("(a)|(b)", "g");
      return "X";
    });
    print(res, "X..XX.cXX.");
    print(log, "(a0)(b3)(b4)(b7)(a8)");
  }
}
testCaptureGroupsChanging();
