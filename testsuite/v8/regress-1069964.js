



Realm.createAllowCrossRealmAccess();
const c = Realm.global(1);
Realm.detachGlobal(1);
try { c.constructor = () => {}; } catch {}
