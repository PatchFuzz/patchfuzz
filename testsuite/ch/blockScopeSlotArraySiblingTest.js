









function baselineVerify(act, msg) { if(typeof WScript !== "undefined") { WScript.Echo(msg + ": " + act);} else { print(msg + ": " + act); } }
function verify(act, exp, msg) { if(act !== exp) { if(typeof WScript !== "undefined") { WScript.Echo(msg + ": " + act + " = " + exp);} else { print(msg + ": " + act + " = " + exp); } } }
var level_0_identifier_0 = "level0";
let level_0_identifier_1= "level0";
const level_0_identifier_2= "level0";

(new Function("level_1_identifier_0", "var level_1_identifier_1 = arguments; ;let level_1_identifier_2= \"level1\";\nconst level_1_identifier_3= \"level1\";\n;    var level_1_identifier_4 = 'level1';    ;     \n        verify(level_0_identifier_0, \"level0\", \"[Function Constructor with Args] level_0_identifier_0 at level 1\");;\n    \n        verify(level_0_identifier_1, \"level0\", \"[Function Constructor with Args] level_0_identifier_1 at level 1\");;\n    \n        verify(level_0_identifier_2, \"level0\", \"[Function Constructor with Args] level_0_identifier_2 at level 1\");;\n    \n        verify(level_1_identifier_0, \"level1\", \"[Function Constructor with Args] level_1_identifier_0 at level 1\");;\n    \n        verify(arguments[0], \"level1\", \"[Function Constructor with Args] arguments[0] at level 1\");;\n    \n        verify(level_1_identifier_1[0], \"level1\", \"[Function Constructor with Args] level_1_identifier_1 at level 1\");;\n    \n        verify(level_1_identifier_2, \"level1\", \"[Function Constructor with Args] level_1_identifier_2 at level 1\");;\n    \n        verify(level_1_identifier_3, \"level1\", \"[Function Constructor with Args] level_1_identifier_3 at level 1\");;\n    \n        verify(level_1_identifier_4, \"level1\", \"[Function Constructor with Args] level_1_identifier_4 at level 1\");;\n    \n ;    \n           level_0_identifier_0 += \"level1\";\n           level_0_identifier_1 += \"level1\";\n           arguments[0] += \"level1\";\n           level_1_identifier_2 += \"level1\";\n           level_1_identifier_4 += \"level1\";\n ;    ;    \n            verify(level_1_identifier_0, \"level1level1\", \"[Function Constructor with Args] level_1_identifier_0 after assignment at level 1\");; \n            verify(arguments[0], \"level1level1\", \"[Function Constructor with Args] arguments[0] after assignment at level 1\");; \n            verify(level_1_identifier_1[0], \"level1level1\", \"[Function Constructor with Args] level_1_identifier_1[0] after assignment at level 1\");; \n            verify(level_1_identifier_2, \"level1level1\", \"[Function Constructor with Args] level_1_identifier_2 after assignment at level 1\");; \n            verify(level_1_identifier_3, \"level1\", \"[Function Constructor with Args] level_1_identifier_3 after assignment at level 1\");; \n            verify(level_1_identifier_4, \"level1level1\", \"[Function Constructor with Args] level_1_identifier_4 after assignment at level 1\");; \n"))("level1");


verify(level_0_identifier_0, "level0level1", "[Function Constructor with Args] level_0_identifier_0 after assignment at level 0");; 
verify(level_0_identifier_1, "level0level1", "[Function Constructor with Args] level_0_identifier_1 after assignment at level 0");; 
verify(level_0_identifier_2, "level0", "[Function Constructor with Args] level_0_identifier_2 after assignment at level 0");; 

WScript.Echo("PASSED")