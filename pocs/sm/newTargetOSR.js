function testOSRNewTarget(expected) {
    for (let i = 0; i < 1100; i++)
        print(new.target, expected);
}

new testOSRNewTarget(testOSRNewTarget);
