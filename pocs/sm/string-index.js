function basic() {
    var zero = "0";
    var one  = "1";
    var thousand = String(1000);
    var max = String(0xffff);

    print(zero, "0");
    print(Number(zero), 0);
    print(String(Number(zero)), "0");

    print(one, "1");
    print(Number(one), 1);
    print(String(Number(one)), "1");

    print(thousand, "1000");
    print(Number(thousand), 1000);
    print(String(Number(thousand)), "1000");

    print(max, "65535");
    print(Number(max), 0xffff);
    print(String(Number(max)), "65535");
}

function index() {
    var zero = "0";
    var trippleZero = "000";

    var seven = "7";
    var doubleOhSeven = "007";

    var object = {0: "a", "000": "b"};
    var object2 = {7: "a", "007": "b"};

    var array = ["a"];
    array[trippleZero] = "b";
    var array2 = [0, 1, 2, 3, 4, 5, 6, "a"];
    array2[doubleOhSeven] = "b";

    for (var i = 0; i < 30; i++) {
        print(object[zero], "a");
        print(object[0], "a");
        print(object[trippleZero], "b");

        print(object2[seven], "a");
        print(object2[7], "a");
        print(object2[doubleOhSeven], "b");

        print(array[zero], "a");
        print(array[0], "a");
        print(array[trippleZero], "b");

        print(array2[seven], "a");
        print(array2[7], "a");
        print(array2[doubleOhSeven], "b");
    }
}

function forin() {
    var array = [0, 1, 2, 3, 4, 5, 6];

    var i = 0;
    for (var name in array) {
        print(name, String(i));
        print(Number(name), i);

        print(array[name], i);
        print(array.hasOwnProperty(name), true);

        i++;
    }
}

function parse() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000, 0xffff];

    for (var number of numbers) {
        print(parseInt(String(number)), number);
        print(parseInt(String(number), 10), number);
        print(parseInt(String(number), 0), number);
    }
}

basic();
index();
forin();
parse();
