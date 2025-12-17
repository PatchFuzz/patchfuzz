function mul(x, y)    { return x * y;  };
function mulConst0(x) { return x * 0;  };
function mulConst1(x) { return -5 * x; };
function mulConst2(x) { return x * -5; };

function f() {
    print(mulConst0(7), 0);
    print(mulConst0(-5), -0);
    print(mulConst0(0), 0);
    print(mulConst0(-0), -0);
    
    print(mulConst1(7), -35);
    print(mulConst1(-8), 40);
    print(mulConst1(0), -0);
    print(mulConst1(-0), 0);
    
    print(mulConst2(7), -35);
    print(mulConst2(-8), 40);
    print(mulConst2(0), -0);
    print(mulConst2(-0), 0);
    
    print(mul(55, 2), 110);
    print(mul(0, -10), -0);
    print(mul(-5, 0), -0);
    print(mul(-0, 0), -0);
    print(mul(0, -0), -0);
    print(mul(0, 0), 0);
    print(mul(-0, -0), 0);
}
f();
