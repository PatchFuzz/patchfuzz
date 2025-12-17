let assert = {
    sameValue(a, e) {
        if (a !== e)
            throw new Error("Expected: " + e + " but got: " + a);
    },
    sameArray(a, e) {
        if (a.length != e.length)
            throw new Error("Got array: " + a + " but expected: " + e);

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== e[i])
                throw new Error("Got array: " + a + " but expected: " + e);
        }
    }
};



let o = {
    30n: "30",
    0o1n: "1",
    0b10n: "2",
    0xan: "10",
    1_2_3n: "1_2_3"
};
print(o["1"], "1");
print(o["2"], "2");
print(o["10"], "10");
print(o["123"], "1_2_3");



o = {
  0b1n() {},
  *0o2n() {},
  async 0x3n() {},
  async* 4n() {},
  get 5n() {},
  set 6n(x) {},
  7n: function () {}
};

print(Object.getOwnPropertyNames(o), ["1", "2", "3", "4", "5", "6", "7"]);

print(o[1].name, "1");
print(o[2].name, "2");
print(o[3].name, "3");
print(o[4].name, "4");
print(Object.getOwnPropertyDescriptor(o, 5).get.name, "get 5");
print(Object.getOwnPropertyDescriptor(o, 6).set.name, "set 6");
print(o[7].name, "7");

{
    class C {
        0b1n() {};
        *0o2n() {};
        async 0x3n() {};
        async* 4n() {};
        get 5n() {};
        set 6n(x) {};
    }

    let c = C.prototype;
    print(Object.getOwnPropertyNames(c), ["1", "2", "3", "4", "5", "6", "constructor"]);
    print(c[1].name, "1");
    print(c[2].name, "2");
    print(c[3].name, "3");
    print(c[4].name, "4");
    print(Object.getOwnPropertyDescriptor(c, 5).get.name, "get 5");
    print(Object.getOwnPropertyDescriptor(c, 6).set.name, "set 6");
}


{
    class C {
        0o1n = "baz";
        0b10n = function () {};
    }

    let c = new C();
    print(c[1n], "baz");
    print(c[1], "baz");
    print(c["1"], "baz");

    print(c[2].name, "2");
}



let {1n: a} = {1n: "foo"};
print(a, "foo");

