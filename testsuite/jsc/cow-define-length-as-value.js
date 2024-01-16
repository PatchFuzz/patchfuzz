function test(create) {
    
    Object.defineProperty(create(), "length", { value: 1 });

    
    Object.defineProperty(create(), "length", { value: 4 });

    
    Object.defineProperty(create(), "length", { value: 3 });
}


test(() => [1, 2]);

test(() => [1.123, 2.50934]);

test(() => [NaN, 2.50934]);

test(() => ["test", "42"]);
