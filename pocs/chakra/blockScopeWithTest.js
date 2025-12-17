function blockScopeWithTestFunc() {
    let o = { p1: 1, p2: "2" };
    {
        let a = 3;
        with (o)
        {
            let b = 4;
            {
                let c = p1.toString();
                const dConst = p2;
                a; 
            }
            a; 
        }
        a; 
    }
    return 0; 
}
blockScopeWithTestFunc();
print("PASSED");
