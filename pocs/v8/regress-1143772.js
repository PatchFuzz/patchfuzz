(function() {
    
    let x = {};
    x.a = 0.1;
    let y = {};
    y.a = {};
    if (!%HaveSameMap(x, y)) return;

    
    let m1 = {};

    
    let m2 = {};
    print(%HaveSameMap(m2, m1));
    m2.a = 13.37;

    
    let m3 = {};
    m3.a = 13.37;
    print(%HaveSameMap(m3, m2));
    m3.b = 1;

    
    let m4 = {};
    m4.a = 13.37;
    m4.b = 1;
    print(%HaveSameMap(m4, m3));
    m4.c = {};

    
    let m4_2 = {};
    m4_2.a = 13.37;
    m4_2.b = 1;
    m4_2.c = {};
    print(%HaveSameMap(m4_2, m4));

    
    let m5 = {};
    m5.a = 13.37;
    print(%HaveSameMap(m5, m2));
    m5.b = 13.37;
    print(%HaveSameMap(m5, m3));

    
    
    print(%HaveSameMap(m5, m3));

    
    let m6 = {};
    m6.a = 13.37;
    print(%HaveSameMap(m6, m2));
    m6.b = 13.37;
    print(%HaveSameMap(m6, m5));
    m6.c = 13.37

    
    let m7 = m4_2;
    print(%HaveSameMap(m7, m4));
    
    
    
    m7.c;
    print(%HaveSameMap(m7, m4));
    print(%HaveSameMap(m6, m7));
})();
