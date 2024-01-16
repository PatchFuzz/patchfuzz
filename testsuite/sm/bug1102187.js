
function minmax() {
    
    
    var pair_min = Math.min(1, 2);
    assertEq(pair_min, 1);
    var pair_max = Math.max(1, 2);
    assertEq(pair_max, 2);

    
    pair_min = Math.min(1.2, 2.3);
    assertEq(pair_min, 1.2);
    pair_max = Math.max(1.2, 2.3);
    assertEq(pair_max, 2.3);

    
    var expt_min = Math.fround(1.2);
    var expt_max = Math.fround(2.3);
    pair_min = Math.min(Math.fround(1.2), Math.fround(2.3));
    assertEq(pair_min, expt_min);
    pair_max = Math.max(Math.fround(1.2), Math.fround(2.3));
    assertEq(pair_max, expt_max);

    
    
    pair_min = Math.min(1, 3, 2, 5, 4);
    assertEq(pair_min, 1);
    pair_max = Math.max(1, 3, 2, 5, 4);
    assertEq(pair_max, 5);

    
    pair_min = Math.min(1.1, 3.3, 2.2, 5.5, 4.4);
    assertEq(pair_min, 1.1);
    pair_max = Math.max(1.1, 3.3, 2.2, 5.5, 4.4);
    assertEq(pair_max, 5.5);

    
    expt_min = Math.fround(1.1);
    expt_max = Math.fround(5.5);
    pair_min = Math.min(Math.fround(1.1), Math.fround(3.3), Math.fround(2.2),
                        Math.fround(5.5), Math.fround(4.4));
    assertEq(pair_min, expt_min);
    pair_max = Math.max(Math.fround(1.1), Math.fround(3.3), Math.fround(2.2),
                        Math.fround(5.5), Math.fround(4.4));
    assertEq(pair_max, expt_max);
}

minmax();
minmax();
