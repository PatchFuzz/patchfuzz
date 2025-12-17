for (;;) {
    try {
        throw 3;
    } catch(e) {
        break;
    }
}
for (var i = 0; i < 1500; i++) {}
