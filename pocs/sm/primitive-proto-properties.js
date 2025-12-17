function shadowing() {
    Object.prototype.x = 1;

    for (var i = 0; i < 20; i++) {
        var x = "a".x;
        print(x, i <= 15 ? 1 : "hello");

        if (i == 15) {
            String.prototype.x = "hello";
        }
    }

    delete Object.prototype.x;
}

function deleted() {
    String.prototype.y = 1;

    for (var i = 0; i < 20; i++) {
        var y = "a".y;
        print(y, i <= 15 ? 1 : undefined);

        if (i == 15) {
            delete String.prototype.y;
        }
    }

    delete String.prototype.y;
}


function notdefined() {
    for (var i = 0; i < 20; i++) {
        var z = "a".z;
        print(z, i <= 15 ? undefined : "test");

        if (i == 15) {
            String.prototype.z = "test";
        }
    }

    delete String.prototype.z;
}

shadowing();
deleted();
notdefined();
