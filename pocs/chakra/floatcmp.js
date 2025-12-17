function print(s) {
    if (typeof(WScript) == "undefined")
        document.write(s + "<br/>");
    else
        print(s);
}

var Count = 0;
var Failed = 0;

function Check(str, result, expected)
{
    if (result != expected)
    {
        print("Test #"+Count+" failed. <"+str+"> Expected "+expected);
        Failed++;
    }
}

function test(s1, s2, b1)
{
    
    s1 += 0.1;
    s2 += 0.1;
    b1 += 0.1;

    var r = false;

    
    Count++;  r = false;
    if (s1 == b1) {
        r = true;
    }
    Check("s1 == b1", r, false);

    
    Count++; r = false;
    if (s1 != b1)
    {
        r = true;
    }
    Check("s1 != b1", r, true);

    
    Count++; r = false;
    if (s1 <= b1) {
        r = true;
    }
    Check("s1 <= b1", r, true);

    
    Count++; r = false;
    if (s1 < b1) {
        r = true;
    }
    Check("s1 < b1", r, true);

    
    Count++; r = false;
    if (s1 >= b1) {
        r = true;
    }
    Check("s1 >= b1", r, false);

    
    Count++; r = false;
    if (s1 > b1) {
        r = true;
    }
    Check("s1 > b1", r, false);

    
    Count++; r = false;
    if (s1 == s2)
    {
        r = true;
    }
    Check("s1 == s2", r, true);

    
    Count++; r = false;
    if (s1 != s2) {
        r = true;
    }
    Check("s1 != s2", r, false);

    
    Count++; r = false;
    if (s1 <= s2) {
        r = true;
    }
    Check("s1 <= s2", r, true);

    
    Count++; r = false;
    if (s1 < s2) {
        r = true;
    }
    Check("s1 < s2", r, false);

    
    Count++; r = false;
    if (s1 >= s2) {
        r = true;
    }
    Check("s1 >= s2", r, true);

    
    Count++; r = false;
    if (s1 > s2) {
        r = true;
    }
    Check("s1 > s2", r, false);


    
    Count++;
    Check("s1 == b1", s1 == b1, false);

    
    Count++;
    Check("s1 != b1", s1 != b1, true);

    
    Count++;
    Check("s1 <= b1", s1 <= b1, true);

    
    Count++;
    Check("s1 < b1", s1 < b1, true);

    
    Count++;
    Check("s1 >= b1", s1 >= b1, false);

    
    Count++;
    Check("s1 > b1", s1 > b1, false);

    
    Count++;
    Check("s1 == s2", s1 == s2, true);

    
    Count++;
    Check("s1 != s2", s1 != s2, false);

    
    Count++;
    Check("s1 <= s2", s1 <= s2, true);

    
    Count++;
    Check("s1 < s2", s1 < s2, false);

    
    Count++;
    Check("s1 >= s2", s1 >= s2, true);

    
    Count++;
    Check("s1 > s2", s1 > s2, false);


    
    Count++;  r = false;
    if (s1 === b1) {
        r = true;
    }
    Check("s1 === b1", r, false);

    
    Count++; r = false;
    if (s1 !== b1)
    {
        r = true;
    }
    Check("s1 !== b1", r, true);

    
    Count++; r = false;
    if (s1 === s2)
    {
        r = true;
    }
    Check("s1 === s2", r, true);

    
    Count++; r = false;
    if (s1 !== s2) {
        r = true;
    }
    Check("s1 !== s2", r, false);

    
    Count++;
    Check("s1 === b1", s1 === b1, false);

    
    Count++;
    Check("s1 !== b1", s1 !== b1, true);

    
    Count++;
    Check("s1 === s2", s1 === s2, true);

    
    Count++;
    Check("s1 !== s2", s1 !== s2, false);



    if (!Failed)
    {
        print("Passed");
    }

}


test(1.1, 1.1, 2.1);
