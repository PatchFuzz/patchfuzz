Object.defineProperties(constructor, { $: Object })
JSON.parse('{"a":1}', function (k) {
  if (k) { $ *= $ }
})
var $ = Object.freeze(RegExp($, 'g')).exec()
