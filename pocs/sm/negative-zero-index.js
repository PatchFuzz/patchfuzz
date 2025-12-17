function test() {
    const array = [1];
    for (let i = 0; i < 10; i++) {
        print(array[0], 1);
        print(array[0.0], 1);
        print(array[-0.0], 1);
        
        print(array["-0"], undefined);
    }

    const string = "a";
    for (let i = 0; i < 10; i++) {
        print(string[0], "a");
        print(string[0.0], "a");
        print(string[-0.0], "a");
        print(string["-0"], undefined);
    }
}

test();
