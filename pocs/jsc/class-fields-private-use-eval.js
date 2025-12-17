function print(a, message) {
    if (!a)
        throw new Error(message);
}

let inst = new class {
  a = eval("(i) => i.#b");

  #b = {};
};

inst.a(inst).x = 1;
print(inst.a(inst).x == 1);
