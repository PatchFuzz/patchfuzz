

let o = $vm.createProxy({});
o.__proto__ = o;

try {
    for (let q in o) { }
} catch { }
