;
;
;

print([...[1, 2, 3]], [1, 2, 3]);
print([1, ...[2, 3, 4], 5], [1, 2, 3, 4, 5]);
print([1, ...[], 2], [1, 2]);
print([1, ...[2, 3], 4, ...[5, 6]], [1, 2, 3, 4, 5, 6]);
print([1, ...[], 2], [1, 2]);
print([1,, ...[2]], [1,, 2]);
print([1,, ...[2],, 3,, 4,], [1,, 2,, 3,, 4,]);
print([...[1, 2, 3],,,,], [1, 2, 3,,,,]);
print([,,...[1, 2, 3],,,,], [,,1,2,3,,,,]);
print([...[1, 2, 3],,,,...[]], [1,2,3,,,,]);

print([...[undefined]], [undefined]);


print([...new Int32Array([1, 2, 3])], [1, 2, 3]);
print([..."abc"], ["a", "b", "c"]);
print([...[1, 2, 3][Symbol.iterator]()], [1, 2, 3]);
print([...new Set([1, 2, 3])], [1, 2, 3]);
print([...new Map([["a", "A"], ["b", "B"], ["c", "C"]])].map(([k, v]) => k + v), ["aA", "bB", "cC"]);
let itr = {};
itr[Symbol.iterator] = function () {
    return {
        i: 1,
        next: function() {
            if (this.i < 4)
                return { value: this.i++, done: false };
            else
                return { value: undefined, done: true };
        }
    };
}
print([...itr], [1, 2, 3]);
function* gen() {
    for (let i = 1; i < 4; i ++)
        yield i;
}
print([...gen()], [1, 2, 3]);

let a, b = [1, 2, 3];
print([...a=b], [1, 2, 3]);



print(() => [...null], TypeError);
print(() => [...undefined], TypeError);

