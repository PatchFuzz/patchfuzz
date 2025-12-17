var log = '';

function Iter() {
    function next() {
        log += 'n';
        print(arguments.length, 0)
        print(arguments[0], undefined)
        return { get value() { throw 42; }, done: true }
    }

    this[Symbol.iterator] = function () { return this; }
    this.next = next;
}

for (var x of new Iter())
    throw 'not reached';

print(log, 'n');
