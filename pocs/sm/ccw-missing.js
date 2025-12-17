var wrapper = evaluate("var o = {}; o", {global: newGlobal({sameZoneAs: this})});
for (var i = 0; i < 50; i++) {
  print(wrapper.x, undefined);
}
