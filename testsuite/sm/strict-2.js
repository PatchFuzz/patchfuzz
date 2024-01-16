

load(libdir + "asserts.js");

assertThrowsInstanceOf(
    () => Function("'use strict'; (a = function (obj) { with (obj) f(); }) => { }"),
    SyntaxError);

assertThrowsInstanceOf(
    () => Function("'use strict'; (a = obj => { with (obj) f(); }) => { }"),
    SyntaxError);
