














var src = '(function () {'
for (var i = 0; i < 550; i++) { src += 'var a' + i + ' = 5; ' }
src += '})()'
eval(src)
