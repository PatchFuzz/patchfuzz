for (let i = 0; i < 2; ++i) {
    
    let power = 1000 + i;

    
    let expected = (power & 1) === 0 ? +0 : -0;

    print(Math.pow(-3, -power), expected);
}
