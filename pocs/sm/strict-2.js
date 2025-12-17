;

print(
    () => Function("'use strict'; (a = function (obj) { with (obj) f(); }) => { }"),
    SyntaxError);

print(
    () => Function("'use strict'; (a = obj => { with (obj) f(); }) => { }"),
    SyntaxError);
