


function Canonicalize(ch) {
  var u = ch.toUpperCase();
  if (u.length > 1) return ch;
  var cu = u.charCodeAt(0);
  if (ch.charCodeAt(0) >= 128 && cu < 128) return ch;
  return cu;
}

function TestEquivalenceClass(eclass) {
  var backref = /(.)\1/i;

  for (var i = 0; i < eclass.length; i++) {
    for (var j = 0; j < eclass.length; j++) {
      if (i == j) continue;
      var c1 = eclass[i];
      var c2 = eclass[j];
      var cc = c1 + c2;
      var shouldMatch = Canonicalize(c1) === Canonicalize(c2);

      assertEq(backref.test(cc), shouldMatch);
    }
  }
}

function TestAll() {
  for (var eclass of equivalence_classes) {
    TestEquivalenceClass(eclass);
  }
}





var equivalence_classes = [
  '\u0041\u0061',              
  '\u004b\u006b\u212a',        
  '\u0053\u0073\u017f',        
  '\u00b5\u039c\u03bc',        
  '\u00c5\u00e5\u212b',        
  '\u00df\u1e9e',              
  '\u03a9\u03c9\u2126',        
  '\u0390\u1fd3',              
  '\u0398\u03b8\u03d1\u03f4',  
  '\u03b0\u1fe3',              
  '\u1f80\u1f88',              
  '\u1fb3\u1fbc',              
  '\u1fc3\u1fcc',              
  '\u1ff3\u1ffc',              
  '\ufb05\ufb06',              

  
  
  
  '\u01c4\u01c5\u01c6', '\u01c7\u01c8\u01c9', '\u01ca\u01cb\u01cc',
  '\u01f1\u01f2\u01f3', '\u0345\u0399\u03b9\u1fbe', '\u0392\u03b2\u03d0',
  '\u0395\u03b5\u03f5', '\u039a\u03ba\u03f0', '\u03a0\u03c0\u03d6',
  '\u03a1\u03c1\u03f1', '\u03a3\u03c2\u03c3', '\u03a6\u03c6\u03d5',
  '\u0412\u0432\u1c80', '\u0414\u0434\u1c81', '\u041e\u043e\u1c82',
  '\u0421\u0441\u1c83', '\u0422\u0442\u1c84\u1c85', '\u042a\u044a\u1c86',
  '\u0462\u0463\u1c87', '\u1c88\ua64a\ua64b', '\u1e60\u1e61\u1e9b'
];

TestAll();
