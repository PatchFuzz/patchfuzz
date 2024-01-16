





var realm = Realm.create();
var g = Realm.global(realm);
var obj = {x: 0, g: g};



Realm.navigate(realm);
gc();
