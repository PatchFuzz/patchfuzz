"use strict";
;
print(function () {
    eval("(function (...arguments) {})");
}, SyntaxError);
print(function () {
    eval("(function (...eval) {})");
}, SyntaxError);
