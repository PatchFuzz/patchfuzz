




try {
    Object.defineProperty({}, "x", null);
} catch (e) {
    if (e instanceof TypeError) {
        if (e.message !== "Invalid descriptor for property 'x'") {
            print('FAIL');
        } else {
            print('PASS');
        }
    } else {
        print('FAIL');
    }
}
