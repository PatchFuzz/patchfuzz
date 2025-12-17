let offsets = [213, 559, 255, 515, 30, 507, 252, 329, 487, 7];

function update_index(i, j) {
    var offset = offsets[j % offsets.length];
    return i + offset;
}

function compute_index(initial, count) {
    for (var i = 0; i < count; i++) {
        initial = update_index(initial, i);
    }
    return initial;
}


function mutate_object(obj, count, epsilon = 0) {
    var index = 0;
    for (var i = 0; i < count; i++) {
        index = update_index(index, i);
        obj[index] = i + epsilon;
    }
    return obj[offsets[0]+offsets[1]] === (1 + epsilon) &&
           obj[10] === undefined;
}


function create_variant(variant) {
    var source = mutate_object.toString().replace("mutate_object", "mutate_object_"+variant);
    return source;
}

function test_basic() {
    eval(create_variant("basic"));
    var x = {};

    var count = 100;
    print(mutate_object_basic(x, count), true);
    var end = compute_index(0, count);
    print(x[end], count - 1);
    print(x[end - 1], undefined);
}


function test_frozen() {
    eval(create_variant("frozen"));
    var x = {};
    Object.freeze(x);

    var count = 100;
    print(mutate_object_frozen(x, count), false);

    var end = compute_index(0, count);

    var y = {};
    print(mutate_object_frozen(y, count), true);
    print(y[end], count - 1);
    Object.freeze(y);

    
    print(mutate_object_frozen(x, count, 10), false);
    print(y[end], count - 1);
}


function test_update() {
    eval(create_variant("update"));

    var x = {};
    var count = 100;
    print(mutate_object_update(x, count), true);
    var end = compute_index(0, count);
    print(x[end], count - 1);
    print(x[end - 1], undefined);

    var epsilon = 2;
    mutate_object_update(x, 200, epsilon);
    print(x[end], count -1 + epsilon)
}


function test_nonwritable() {
    eval(create_variant("nonwritable"));
    var x = {};
    var count = 100;
    var index = compute_index(0, 10);
    Object.defineProperty(x, index, {value: -10, writable: false});
    mutate_object_nonwritable(x, count);
    print(x[index], -10);
}


function test_setter() {
    eval(create_variant("setter"));
    var x = {};
    var count = 100;
    var index = compute_index(0, 80);
    var sigil = 0;
    Object.defineProperty(x, index, {set(newVal) {sigil++; }});
    mutate_object_setter(x, count);
    print(sigil, 1);
    print(x[index], undefined);
}


function test_proto_indices() {
    eval(create_variant("proto_indices"));
    var x = {};
    var count = 100;
    var index = compute_index(0, 80);
    x.__proto__[index] = "hello";
    mutate_object_proto_indices(x, count);
    print(x.__proto__[index], "hello");
    print(x[index], 79);
}

test_basic();
test_frozen();
test_update();
test_nonwritable();
test_setter();
test_proto_indices();
