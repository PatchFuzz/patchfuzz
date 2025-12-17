(function (x) {
    
    
    print(delete (1 ? x : x), true);
    print(delete (0 || x), true);
    print(delete (1 && x), true);

    
    print(delete x, false);
}());
