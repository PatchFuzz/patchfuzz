'use strict';
let r = Realm.createAllowCrossRealmAccess();
Realm.detachGlobal(r);
try {
  Realm.global(r)[1] = 0;
} catch (e) {
}
