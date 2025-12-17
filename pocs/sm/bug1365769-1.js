function f(t) {
    for (var i = 0; i < 2; i++) {
        try {
            var x = 1;
            new String();   
            x = 2;
            new String(t);  
        } catch (e) {
            print(x, 2);
        }
    }
}

f(Symbol());
