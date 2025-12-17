var contextA = Realm.create();
var date1 = Realm.eval(contextA, "new Date('Thu, 29 Aug 2013 00:00:00 UTC')");
new Date('Thu, 29 Aug 2013 00:00:01 UTC');
var date2 = Realm.eval(contextA, "new Date('Thu, 29 Aug 2013 00:00:00 UTC')");
print(date1, date2);
