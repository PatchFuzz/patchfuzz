function attach(f) {
  (function (r) {
    print(r);
  })(f);
}

async function mainTest(notAttachCall) {
    if (notAttachCall) {
        for (let i = 0; i < 1; ++i) {
            await attach(mainTest);
        }
    } else {
        var i = 10;
    }
}
mainTest(true);
print("PASSED");