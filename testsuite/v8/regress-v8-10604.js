





(async function test() {
  try {
    import('does_not_exist.mjs');
    assertUnreachable();
  } catch {};

  try {
    await eval("import('does_not_exist.mjs')");
    assertUnreachable();
  } catch {};

  try {
    await Realm.eval(Realm.create(), "import('does_not_exist.mjs')");
    assertUnreachable();
  } catch {};
})();
