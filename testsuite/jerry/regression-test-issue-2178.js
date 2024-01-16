














bad = "'detailForm','detailForm:j_id166', []);\" ><img alt=\"Export to XLS format\" />\n</a>"
good = "'detailForm','detailForm:j_id166');\" ><img alt=\"Export to XLS format\" />\n</a>"
r = /'(detailForm:j_id\d+)'[^>]+>[^>]+Export to XLS format/;
assert(!!good.match(r) && !!bad.match(r));


var regexPatternCharacters = ['^', '$', '\\', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}'];
regexPatternCharacters.forEach(function (str) {
  assert(str.match(/[^>]/) == str);
})
