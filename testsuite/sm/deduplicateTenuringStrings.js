













gczeal(0);

var helperCode = `
function makeInlineStr(isLatin1) {
  var s = isLatin1 ? "123456789*1" : "一二三";
  return s + s;
}




function makeGenericLinearStr() {
  return notes(() => 1);
}

function makeRopeStr(isLatin1) {
  var left = isLatin1 ? "1" : "一";
  var right = isLatin1 ? "123456789*123456789*123456" :
    					   "一二三四五六七八九*一二三四五六七八";
  return left + right;
}

function makeExtensibleStr(isLatin1) {
  var r = makeRopeStr(isLatin1);
  ensureLinearString(r);
  return r;
}

function makeExtensibleStrFrom(str) {
  var left = str.substr(0, str.length/2);
  var right = str.substr(str.length/2, str.length);
  var ropeStr = left + right;
  return ensureLinearString(ropeStr);
}

function makeDependentStr(isLatin1) {
  var e = makeExtensibleStr(isLatin1);
  var r1 = e + "!";
  var r2 = e + r1;
  ensureLinearString(r2);
  return r1;
}

function makeDependentStrFrom(str) {
  var e = makeExtensibleStrFrom(str);
  var r1 = e.substr(0, e.length/2) + e.substr(e.length/2, e.length);
  var r2 = e + r1;
  ensureLinearString(r2);
  return r1;
}

function makeExternalStr(isLatin1) {
  return isLatin1 ? newString("12345678", {external: true}) :
                    newString("一二三", {external: true});
}

function tenureStringsWithSameChars(str1, str2, isDeduplicatable) {
  minorgc();
  assertEq(stringRepresentation(str1) == stringRepresentation(str2),
	   isDeduplicatable);
}

function assertDiffStrRepAfterMinorGC(g1, g2) {
  minorgc();
  g1.eval(\`strRep = stringRepresentation(str);\`);
  g2.eval(\`strRep = stringRepresentation(str);\`);
  assertEq(g1.strRep == g2.strRep, false);
}
`;

eval(helperCode);




function test1(isLatin1) {
  const isDeduplicatable = true;

  
  
  var str1 = makeInlineStr(isLatin1);
  var str2 = makeInlineStr(isLatin1);
  tenureStringsWithSameChars(str1, str2, isDeduplicatable);

  
  str1 = makeExtensibleStr(isLatin1);
  str2 = makeExtensibleStr(isLatin1);
  tenureStringsWithSameChars(str1, str2, isDeduplicatable);

  
  str1 = makeDependentStr(isLatin1);
  str2 = makeDependentStr(isLatin1);
  tenureStringsWithSameChars(str1, str2, isDeduplicatable);

  
  if (isLatin1) {
    var str1 = makeGenericLinearStr();
    var str2 = makeGenericLinearStr();
    tenureStringsWithSameChars(str1, str2, isDeduplicatable);
  }

  
  
  str1 = makeRopeStr(isLatin1);
  str2 = makeRopeStr(isLatin1);
  tenureStringsWithSameChars(str1, str2, !isDeduplicatable);

  
  

  
}



function test2(isLatin1) {
  var g1 = newGlobal({ newCompartment: true });
  var g2 = newGlobal({ newCompartment: true });

  g1.eval(helperCode);
  g2.eval(helperCode);

  
  g1.eval(`var str = makeInlineStr(${isLatin1}); `);
  g2.eval(`var str = makeInlineStr(${isLatin1}); `);
  assertDiffStrRepAfterMinorGC(g1, g2);

  
  g1.eval(`str = makeExtensibleStr(${isLatin1}); `);
  g2.eval(`str = makeExtensibleStr(${isLatin1}); `);
  assertDiffStrRepAfterMinorGC(g1, g2);

  
  g1.eval(`str = makeDependentStr(${isLatin1}); `);
  g2.eval(`str = makeDependentStr(${isLatin1}); `);
  assertDiffStrRepAfterMinorGC(g1, g2);

  
  if (isLatin1) {
    g1.eval(`str = makeGenericLinearStr();`);
    g2.eval(`str = makeGenericLinearStr();`);
    assertDiffStrRepAfterMinorGC(g1, g2);
  }
}



function test3(isLatin1) {
  const isDeduplicatable = true;

  
  var dependentStr = makeDependentStr(isLatin1);
  var extensibleStr = makeExtensibleStrFrom(dependentStr);
  tenureStringsWithSameChars(dependentStr, extensibleStr, !isDeduplicatable);

  if (isLatin1) {
    
    var genericLinearStr = makeGenericLinearStr();
    var extensibleStr = makeExtensibleStrFrom(genericLinearStr);
    tenureStringsWithSameChars(
      genericLinearStr,
      extensibleStr,
      !isDeduplicatable
    );

    
    var dependentStr = makeDependentStrFrom(genericLinearStr);
    tenureStringsWithSameChars(
      dependentStr,
      genericLinearStr,
      !isDeduplicatable
    );
  }

  
  
}

function runTests() {
  var charEncoding = { TWOBYTE: 0, LATIN1: 1 };

  test1(charEncoding.TWOBYTE);
  test2(charEncoding.TWOBYTE);
  test3(charEncoding.TWOBYTE);

  test1(charEncoding.LATIN1);
  test2(charEncoding.LATIN1);
  test3(charEncoding.LATIN1);
}

runTests();
