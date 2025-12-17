import * as ns from 'module1.js';

let other = ns;

const iterations = 2000;

let x = 0;
for (let i = 0; i < iterations; i++) {
    if (i == iterations / 2)
        other = 1;
    x += other.a;
}

print(other.a, undefined);
print(x, NaN);
