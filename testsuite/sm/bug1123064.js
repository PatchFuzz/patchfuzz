

function toint32() {

    
    var ToInteger = getSelfHostedValue("ToInteger");

    
    var result = ToInteger(1);
    assertEq(result, 1);

    
    result = ToInteger(0.12);
    assertEq(result, 0);

    
    result = ToInteger(Math.fround(0.13));
    assertEq(result, 0);

    
    result = ToInteger(true);
    assertEq(result, 1);

    
    result = ToInteger(null);
    assertEq(result, 0);
}

toint32();
toint32();
