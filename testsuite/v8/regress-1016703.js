





let realms = [];
for (let i = 0; i < 4; i++) {
  realms.push(Realm.createAllowCrossRealmAccess());
}

for (let i = 0; i < 4; i++) {
  Realm.detachGlobal(realms[i]);
  gc();
}
