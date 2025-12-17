function blockScopeTryCatchTestFunc() {
    try {
        throw "Exception!";
    }
    catch (ex) {
        let a = 1;
        const bConst = 2;
        a; 
        {
            let c = 3;
            const dConst = 4;
            c; 
        }
    }
    return 0;
}
blockScopeTryCatchTestFunc();
print("PASSED");
