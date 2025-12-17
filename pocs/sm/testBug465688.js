function testBug465688() {
    for (let d of [-0x80000000, -0x80000000]) - -d;
    return true;
}
print(testBug465688(), true);
