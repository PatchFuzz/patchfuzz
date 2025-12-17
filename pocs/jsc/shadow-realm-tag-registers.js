let foo = new ShadowRealm().evaluate(`()=>{}`);
for (let i = 0; i < testLoopCount; i++) {
    foo();
}
