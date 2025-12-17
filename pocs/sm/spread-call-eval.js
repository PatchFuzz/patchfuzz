;
;

print(eval(...[]), undefined);
print(eval(...["1 + 2"]), 3);

let a = 10, b = 1;
print(eval(...["a + b"]), 11);

(function() {
  let a = 20;
  print(eval(...["a + b"]), 21);
})();

with ({ a: 30 }) {
  print(eval(...["a + b"]), 31);
}

let line0 = Error().lineNumber;
try {             
  eval(...["("]); 
} catch (e) {
  print(e.lineNumber, 1);
}


print(eval(...["a + b"][Symbol.iterator]()), 11);
print(eval(...new Set(["a + b"])), 11);
let itr = {};
itr[Symbol.iterator] = function() {
    return {
        i: 0,
        next: function() {
            this.i++;
            if (this.i == 1)
                return { value: "a + b", done: false };
            else
                return { value: undefined, done: true };
        }
    };
};
print(eval(...itr), 11);
function* gen() {
    yield "a + b";
}
print(eval(...gen()), 11);

let c = ["C"], d = "D";
print(eval(...c=["c[0] + d"]), "c[0] + dD");



print(() => eval("a + b", ...null), TypeError);
print(() => eval("a + b", ...undefined), TypeError);
