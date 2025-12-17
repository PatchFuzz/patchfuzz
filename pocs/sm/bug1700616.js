function dummy() { with ({}) {}}

function foo() {
    var a = 0;
    var b = 1;
    var c = 2;
    var d = 3;

    
    
    
    dummy();

    
    
    
    for (var i = 0; i < 1000; i++) {

        
        
        a = i % 2 ? b : c;
        b = i % 3 ? c : d;
        c = i % 4 ? d : a;
        d = i % 5 ? a : b;

        
        
        dummy(i % 6 ? d : "");
    }
    return a;
}
foo();
