var a = 3;
function test()
{
    
    for (var i = 0; i < a; i++)
    {   
        print(i);
    }
        
    throw 1;
}

(function () {
    try {
        test();
    }
    catch (e) {
        print(e === 1);
    }
})();