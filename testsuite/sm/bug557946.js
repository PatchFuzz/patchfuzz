




var x = 0;
var y = 0;

function h() {
    if (x == 1)
        y++;
    else
        y--;
}

function F() {
    var m = null;

    function g(i) {
        
        m = "badness";

        
        for (var i = 0; i < 10; i++) {
            h();
        }
    }

    
    for (var i = 0; i < 100; i++) {
        
        g();

        
        if (i > 50)
            x = 1;

        
        m = null;
    }
}

F();

