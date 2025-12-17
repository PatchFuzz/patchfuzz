print(/[\ud800-\udfff]+/u.test('\ud801\udc0f'));



print(/(\ud801\1\udc0f)/u.test('\ud801\udc0f'));
print(/(\ud801\1?\udc0f)/u.test('\ud801\udc0f'));
print(/(\ud801\1{0}\udc0f)/u.test('\ud801\udc0f'));
print(new RegExp('(\ud801\\1\udc0f)','u').test('\ud801\udc0f'));
print(new RegExp('(\ud801\\1?\udc0f)','u').test('\ud801\udc0f'));
print(new RegExp('(\ud801\\1{0}\udc0f)','u').test('\ud801\udc0f'));
