let s = '';
for (let i = 0; i < 1000; i++) {
    s += '(?:a){0,2}';
}

let r = new RegExp(s);
for (let i = 0; i < 1000; i++)
    ''.match(r);
