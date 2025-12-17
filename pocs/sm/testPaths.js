loaded = {}
snarfed = {}
loadRel = {}
snarfRel = {}
for (let f of ['local.js', '../basic/local.js', 'Y.js']) {
  try {
    ;
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




print(loadRel['local.js'], true);
print(loadRel['../basic/local.js'], true);
print(snarfRel['local.js'], true);
print(snarfRel['../basic/local.js'], true);
var cwd = os.getenv('PWD');
if (cwd !== undefined && !(/test.*[\/\\][^\
  print(loaded['local.js'], false);
  print(loaded['../basic/local.js'], false);
  print(snarfed['local.js'], false);
  print(snarfed['../basic/local.js'], false);
}



print(loadRel['Y.js'], false);
print(snarfRel['Y.js'], false);
if (!snarfed['Y.js']) {
  print("WARNING: expected to be able to find Y.js in current directory\n");
  print("(not failing because it depends on where this test was run from)\n");
}
if (!loaded['Y.js']) {
  print("WARNING: expected to be able to find Y.js in current directory\n");
  print("(not failing because it depends on where this test was run from)\n");
}
