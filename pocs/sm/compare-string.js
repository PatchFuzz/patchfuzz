function compareToAtom(a) {
    return a == 'test-test-test-test-test-test-test-test';
}

function compareToAtomStrict(a) {
    return a === 'test-test-test-test-test-test-test-test';
}

function compareToAtomNe(a) {
    return a != 'test-test-test-test-test-test-test-test';
}

function compareToAtomNeStrict(a) {
    return a !== 'test-test-test-test-test-test-test-test';
}

function compareToAtomLessThan(a) {
    return a < 'test-test-test-test-test-test-test-test';
}

function compareToAtomLessThanOrEquals(a) {
    return a <= 'test-test-test-test-test-test-test-test';
}

function compareToAtomGreaterThan(a) {
    return a > 'test-test-test-test-test-test-test-test';
}

function compareToAtomGreaterThanOrEquals(a) {
    return a >= 'test-test-test-test-test-test-test-test';
}

var st = 'st-test-test-test-test-test-test-test';

function compareToRope(a) {
    return a == ('te' + st);
}

function compareToRopeStrict(a) {
    return a === ('te' + st);
}

function compareToRopeNe(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a != ('te' + st);
}

function compareToRopeNeStrict(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a !== ('te' + st);
}

function compareToRopeLessThan(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a < ('te' + st);
}

function compareToRopeLessThanOrEquals(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a <= ('te' + st);
}

function compareToRopeGreaterThan(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a > ('te' + st);
}

function compareToRopeGreaterThanOrEquals(a) {
    var st = 'st-test-test-test-test-test-test-test';
    return a >= ('te' + st);
}

function main() {
    
    
    var test = 'test-test-test-test-test-test-test-test';
    var foobar = 'foobar';

    print(compareToAtom(test), true);
    print(compareToAtom(foobar), false);

    print(compareToAtomStrict(test), true);
    print(compareToAtomStrict(foobar), false);

    print(compareToAtomNe(test), false);
    print(compareToAtomNe(foobar), true);

    print(compareToAtomNeStrict(test), false);
    print(compareToAtomNeStrict(foobar), true);

    print(compareToAtomLessThan(test), false);
    print(compareToAtomLessThan(foobar), true);

    print(compareToAtomLessThanOrEquals(test), true);
    print(compareToAtomLessThanOrEquals(foobar), true);

    print(compareToAtomGreaterThan(test), false);
    print(compareToAtomGreaterThan(foobar), false);

    print(compareToAtomGreaterThanOrEquals(test), true);
    print(compareToAtomGreaterThanOrEquals(foobar), false);


    print(compareToRope(test), true);
    print(compareToRope(foobar), false);

    print(compareToRopeStrict(test), true);
    print(compareToRopeStrict(foobar), false);

    print(compareToRopeNe(test), false);
    print(compareToRopeNe(foobar), true);

    print(compareToRopeNeStrict(test), false);
    print(compareToRopeNeStrict(foobar), true);

    print(compareToRopeLessThan(test), false);
    print(compareToRopeLessThan(foobar), true);

    print(compareToRopeLessThanOrEquals(test), true);
    print(compareToRopeLessThanOrEquals(foobar), true);

    print(compareToRopeGreaterThan(test), false);
    print(compareToRopeGreaterThan(foobar), false);

    print(compareToRopeGreaterThanOrEquals(test), true);
    print(compareToRopeGreaterThanOrEquals(foobar), false);
}

for (var i = 0; i < 10000; i++) {
    main();
}
