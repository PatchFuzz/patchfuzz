load(libdir + "asserts.js");


class a {
    b
    
    #c() {
        d.#c ^= 'x'
    }

    
    
    
    
    t() {
        d.#c = 'x';
        d.#c += 'x';
        d.#c -= 'x';
        d.#c *= 'x';
        d.#c /= 'x';
        d.#c %= 'x';
        d.#c **= 'x';
        d.#c <<= 'x';
        d.#c >>= 'x';
        d.#c >>>= 'x';

        d.#c &= 'x';
        d.#c ^= 'x';
        d.#c |= 'x';

    }

    
    e() {
        d.#c &&= 'x';
        d.#c ??= 'x';
        d.#c ||= 'x';
    }

    
    ds() {
        [d.#c, b] = [1, 2];
    }

    
    incDec() {
        d.#c++;
        d.#c--;
        ++d.#c;
        --d.#c;
    }
}

class b {
    b
    
    #c = 10;

    
    
    
    
    t() {
        d.#c = 'x';
        d.#c += 'x';
        d.#c -= 'x';
        d.#c *= 'x';
        d.#c /= 'x';
        d.#c %= 'x';
        d.#c **= 'x';
        d.#c <<= 'x';
        d.#c >>= 'x';
        d.#c >>>= 'x';

        d.#c &= 'x';
        d.#c ^= 'x';
        d.#c |= 'x';

    }

    
    e() {
        d.#c &&= 'x';
        d.#c ??= 'x';
        d.#c ||= 'x';
    }

    
    ds() {
        [d.#c, b] = [1, 2];
    }


    
    incDec() {
        d.#c++;
        d.#c--;
        ++d.#c;
        --d.#c;
    }
}


class LiveTest {
    #c() { }

    test(lambdas) {
        for (let func of lambdas) {
            assertThrowsInstanceOf(() => func(this), Error);
        }
    }

    
    
    
    
    compound() {
        let tests = [
            (d) => d.#c = 'x',
            (d) => d.#c += 'x',
            (d) => d.#c -= 'x',
            (d) => d.#c *= 'x',
            (d) => d.#c /= 'x',
            (d) => d.#c %= 'x',
            (d) => d.#c **= 'x',
            (d) => d.#c <<= 'x',
            (d) => d.#c >>= 'x',
            (d) => d.#c >>>= 'x',
            (d) => d.#c &= 'x',
            (d) => d.#c ^= 'x',
            (d) => d.#c |= 'x',
        ];

        this.test(tests);
    }

    
    compoundLogical() {
        let tests = [
            (d) => d.#c &&= 'x',
        ]
        this.test(tests);
        
        
        this.#c ??= 'x';
        this.#c ||= 'x';
    }

    
    destructuring() {
        let tests = [
            (d) => [d.#c, b] = [1, 2],
        ]
        this.test(tests);
    }


    
    incDec() {
        let tests = [
            (d) => d.#c++,
            (d) => d.#c--,
            (d) => ++d.#c,
            (d) => --d.#c,
        ];
        this.test(tests);
    }
}

var l = new LiveTest;
l.compound();
l.compoundLogical();
l.destructuring();
l.incDec();


class LiveTestField {
    #c = 0;

    
    
    
    
    compound() {
        assertEq(this.#c = 1, 1);
        assertEq(this.#c += 1, 2);
        assertEq(this.#c -= 1, 1);
        assertEq(this.#c *= 2, 2);
        assertEq(this.#c /= 2, 1);
        assertEq(this.#c %= 1, 0);
        this.#c = 1;
        assertEq(this.#c **= 1, 1);
        assertEq(this.#c <<= 1, 2);
        assertEq(this.#c >>= 1, 1);
        assertEq(this.#c >>>= 1, 0);
        assertEq(this.#c &= 2, 0);
        assertEq(this.#c ^= 2, 2);
        assertEq(this.#c |= 1, 3);
    }

    
    compoundLogical() {
        this.#c = undefined;
        this.#c ||= 10;
        assertEq(this.#c, 10);
        this.#c ||= 15;
        assertEq(this.#c, 10);

        this.#c = false;
        this.#c &&= 10;
        assertEq(this.#c, false);
        this.#c = 10;
        this.#c &&= 15;
        assertEq(this.#c, 15);

        this.#c = null;
        this.#c ??= 10;
        assertEq(this.#c, 10);

        this.#c ??= 15
        assertEq(this.#c, 10);
    }

    
    destructuring() {
        [this.#c, b] = [1, 2];

        assertEq(this.#c, 1);
    }


    
    incDec() {
        this.#c = 0;
        assertEq(++this.#c, 1);
        assertEq(--this.#c, 0);
        this.#c++;
        assertEq(this.#c, 1);
        this.#c--;
        assertEq(this.#c, 0);

    }
}

var k = new LiveTestField;
k.compound();
k.compoundLogical()
k.destructuring()
k.incDec();