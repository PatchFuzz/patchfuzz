function print(b) {
    if (!b)
        throw new Error("Bad result!");
}
noInline(print);

let item1 = 1;
let item2 = 2;

{
    let set = new Set();
    let iterator = set[Symbol.iterator]();
    set.add(item1);
    let element = iterator.next();

    print(element.done == false);
    print(element.value == item1);
}

{
    let set = new Set([item1]);
    let iterator = set[Symbol.iterator]();
    set.add(item2);
    let element = iterator.next();
    print(element.done == false);
    print(element.value == item1);

    element = iterator.next();
    print(element.done == false);
    print(element.value == item2);
}

{
    let set = new Set([item1]);
    let iterator = set[Symbol.iterator]();
    set.delete(item1);

    let element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);

    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);
}

{
    let set = new Set([item1, item2]);
    let iterator = set[Symbol.iterator]();
    set.delete(item2);

    let element = iterator.next();
    print(element.done == false);
    print(element.value == item1);

    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);

    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);
}

{
    let set = new Set([item1, item2]);
    let iterator = set[Symbol.iterator]();

    let element = iterator.next();
    print(element.done == false);
    print(element.value == item1);

    element = iterator.next();
    print(element.done == false);
    print(element.value == item2);

    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);
}

{
    let set = new Set([item1]);
    let iterator = set[Symbol.iterator]();
    set.clear();

    let element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);

    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);

    set.add(item1);
    element = iterator.next();
    print(element.done == true);
    print(element.value == undefined);
}

{
    let set = new Set([item1]);
    let iterator = set[Symbol.iterator]();
    set.clear();

    set.add(item1);
    element = iterator.next();
    print(element.done == false);
    print(element.value == item1);
}
