
for (let i = 0; i < 100; i++) {
  let f = new ShadowRealm().evaluate(`new Proxy(()=>{}, {});`);
  f.apply(undefined, new Array(10_000));
}
