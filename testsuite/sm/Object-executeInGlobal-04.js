

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

assertEq(gw.executeInGlobal("eval('\"Awake\"');").return, "Awake");



g.x = "Swing Lo Magellan";
g.y = "The Milk-Eyed Mender";
assertEq(gw.executeInGlobal("eval('var x = \"A Brief History of Love\"');\n"
                            + "var y = 'Merriweather Post Pavilion';"
                            + "x;").return,
         "A Brief History of Love");
assertEq(g.x, "A Brief History of Love");
assertEq(g.y, "Merriweather Post Pavilion");



g.x = "Swing Lo Magellan";
g.y = "The Milk-Eyed Mender";
assertEq(gw.executeInGlobalWithBindings("eval('var x = d1;'); var y = d2; x;",
                                        { d1: "A Brief History of Love",
                                          d2: "Merriweather Post Pavilion" }).return,
         "A Brief History of Love");
assertEq(g.x, "A Brief History of Love");
assertEq(g.y, "Merriweather Post Pavilion");







g.x = "Swing Lo Magellan";
g.y = "The Milk-Eyed Mender";
assertEq(gw.executeInGlobal("\'use strict\';\n"
                            + "eval('var x = \"A Brief History of Love\"');\n"
                            + "var y = \"Merriweather Post Pavilion\";"
                            + "x;").return,
         "Swing Lo Magellan");
assertEq(g.x, "Swing Lo Magellan");
assertEq(g.y, "Merriweather Post Pavilion");


g.x = "Swing Lo Magellan";
g.y = "The Milk-Eyed Mender";
assertEq(gw.executeInGlobalWithBindings("'use strict'; eval('var x = d1;'); var y = d2; x;",
                                        { d1: "A Brief History of Love",
                                          d2: "Merriweather Post Pavilion" }).return,
         "Swing Lo Magellan");
assertEq(g.x, "Swing Lo Magellan");
assertEq(g.y, "Merriweather Post Pavilion");
