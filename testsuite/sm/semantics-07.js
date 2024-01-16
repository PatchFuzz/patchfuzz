


load(libdir + "asserts.js");
load(libdir + "iteration.js");

var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
var s = '';
for (var v of ['duck', 'duck', 'duck', 'goose', 'and now you\'re it']) {
    s += v;
    if (v === 'goose')
        delete iterProto.next;
    s += '.';
}
assertEq(s, 'duck.duck.duck.goose.and now you\'re it.');
