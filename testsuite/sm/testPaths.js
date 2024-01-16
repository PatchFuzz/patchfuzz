






loaded = {}
snarfed = {}
loadRel = {}
snarfRel = {}
for (let f of ['local.js', '../basic/local.js', 'Y.js']) {
  try {
    load(f);
    loaded[f] = true;
  } catch(e) {
    loaded[f] = !/can't open/.test(e);
  }

  try {
    snarf(f);
    snarfed[f] = true;
  } catch(e) {
    snarfed[f] = !/can't open/.test(e);
  }

  try {
    readRelativeToScript(f);
    snarfRel[f] = true;
  } catch(e) {
    snarfRel[f] = !/can't open/.test(e);
  }

  try {
    loadRelativeToScript(f);
    loadRel[f] = true;
  } catch(e) {
    loadRel[f] = !/can't open/.test(e);
  }
}




assertEq(loadRel['local.js'], true);
assertEq(loadRel['../basic/local.js'], true);
assertEq(snarfRel['local.js'], true);
assertEq(snarfRel['../basic/local.js'], true);
var cwd = os.getenv('PWD');
if (cwd !== undefined && !(/test.*[\/\\][^\
  assertEq(loaded['local.js'], false);
  assertEq(loaded['../basic/local.js'], false);
  assertEq(snarfed['local.js'], false);
  assertEq(snarfed['../basic/local.js'], false);
}



assertEq(loadRel['Y.js'], false);
assertEq(snarfRel['Y.js'], false);
if (!snarfed['Y.js']) {
  print("WARNING: expected to be able to find Y.js in current directory\n");
  print("(not failing because it depends on where this test was run from)\n");
}
if (!loaded['Y.js']) {
  print("WARNING: expected to be able to find Y.js in current directory\n");
  print("(not failing because it depends on where this test was run from)\n");
}
