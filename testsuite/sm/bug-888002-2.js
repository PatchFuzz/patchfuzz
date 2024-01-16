

(function (x) {
    
    
    assertEq(delete (1 ? x : x), true);
    assertEq(delete (0 || x), true);
    assertEq(delete (1 && x), true);

    
    assertEq(delete x, false);
}());
