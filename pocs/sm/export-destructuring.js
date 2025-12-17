function print(value, expected)
{
    print(value instanceof Array, true);
    print(value.length, expected.length);
    for (let i = 0; i < value.length; i++)
        print(value[i], expected[i]);
}

registerModule('a', parseModule(`
    export const [] = [];
    export const [a=0] = [];
    export const [b] = [1];
    export const [c, d, e] = [2, 3, 4];
    export const [, f, g] = [5, 6, 7];
    export const [h,, i] = [8, 9, 10];
    export const [,, j] = [11, 12, 13];
    export const [...k] = [14, 15, 16];
    export const [l, ...m] = [17, 18, 19];
    export const [,, ...n] = [20, 21, 22];
`));

m = parseModule(`
    import * as a from 'a';

    print(a.a, 0);
    print(a.b, 1);
    print(a.c, 2);
    print(a.d, 3);
    print(a.e, 4);
    print(a.f, 6);
    print(a.g, 7);
    print(a.h, 8);
    print(a.i, 10);
    print(a.j, 13);
    print(a.k, [14, 15, 16]);
    print(a.l, 17);
    print(a.m, [18, 19]);
    print(a.n, [22]);
`);

moduleLink(m);
moduleEvaluate(m);

registerModule('o', parseModule(`
    export const {} = {};
    export const {x: a=0} = {};
    export const {x: b=0} = {x: 1};
    export const {c, d, e} = {c: 2, d: 3, e: 4};
    export const {x: f} = {x: 5};
    export const {g} = {};
    export const {h=6} = {};
`));

m = parseModule(`
    import * as o from 'o';

    print(o.a, 0);
    print(o.b, 1);
    print(o.c, 2);
    print(o.d, 3);
    print(o.e, 4);
    print(o.f, 5);
    print(o.g, undefined);
    print(o.h, 6);
`);

moduleLink(m);
moduleEvaluate(m);

registerModule('ao', parseModule(`
    export const [{x: a}, {x: b}] = [{x: 1}, {x: 2}];
    export const [{c}, {d}] = [{c: 3}, {d: 4}];
    export const [,, {e}, ...f] = [5, 6, {e: 7}, 8, 9];

    export const {x: [g, h, i]} = {x: [10, 11, 12]};

    export const [[], [...j], [, k, l]] = [[], [13, 14], [15, 16, 17]];

    export const {x: {m, n, o=20}, y: {z: p}} = {x: {m: 18, n: 19}, y: {z: 21}};
`));

m = parseModule(`
    import * as ao from 'ao';

    print(ao.a, 1);
    print(ao.b, 2);
    print(ao.c, 3);
    print(ao.d, 4);
    print(ao.e, 7);
    print(ao.f, [8, 9]);
    print(ao.g, 10);
    print(ao.h, 11);
    print(ao.i, 12);
    print(ao.j, [13, 14]);
    print(ao.k, 16);
    print(ao.l, 17);
    print(ao.m, 18);
    print(ao.n, 19);
    print(ao.o, 20);
    print(ao.p, 21);
`);

moduleLink(m);
moduleEvaluate(m);
