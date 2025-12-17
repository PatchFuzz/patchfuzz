var obj = {
    attr0: 'val0',
    attr1: 'val1',
    attr2: 'val2',
    attr3: 'val3',
    attr4: 'val4',
    attr5: 'val5',
    attr6: 'val6',
    attr7: 'val7',
    attr8: 'val8',
    attr9: 'val9',
    attr10: 'val10',
    attr11: 'val11',
    attr12: 'val12',
    attr13: 'val13',
    attr14: 'val14',
    attr15: 'val15',
    attr16: 'val16',
    attr17: 'val17',
}

var baseName = 'attr';

(function() {
    for (var i = 0; i < 128; ++i) {
        var name = baseName + (i % 18);
        var result = obj[name];
        switch (i) {
          case 0: print('val0', result); break;
          case 1: print('val1', result); break;
          case 2: print('val2', result); break;
          case 3: print('val3', result); break;
          case 4: print('val4', result); break;
          case 5: print('val5', result); break;
          case 6: print('val6', result); break;
          case 7: print('val7', result); break;
          case 8: print('val8', result); break;
          case 9: print('val9', result); break;
          case 10: print('val10', result); break;
          case 11: print('val11', result); break;
          case 12: print('val12', result); break;
          case 13: print('val13', result); break;
          case 14: print('val14', result); break;
          case 15: print('val15', result); break;
          case 16: print('val16', result); break;
          case 17: print('val17', result); break;
        }
    }
})();


