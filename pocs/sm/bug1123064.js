function toint32() {

    
    var ToInteger = getSelfHostedValue("ToInteger");

    
    var result = ToInteger(1);
    print(result, 1);

    
    result = ToInteger(0.12);
    print(result, 0);

    
    result = ToInteger(Math.fround(0.13));
    print(result, 0);

    
    result = ToInteger(true);
    print(result, 1);

    
    result = ToInteger(null);
    print(result, 0);
}

toint32();
toint32();
