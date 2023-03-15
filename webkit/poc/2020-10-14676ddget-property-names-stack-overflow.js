

let o = print({});
o.__proto__ = o;

try {
    for (let q in o) { }
} catch { }
