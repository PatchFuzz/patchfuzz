function test0() {
    for(abcd of [])
    {
        try {
        } catch(e) {
        }
        try {
        } catch(e) {
        }
    }
}

test0();
test0();
test0();

print("PASSED");
