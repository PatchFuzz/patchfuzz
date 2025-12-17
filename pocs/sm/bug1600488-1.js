const token = {};
let cleanedUpValue;
const finalizationRegistry = new FinalizationRegistry(value => {
  cleanedUpValue = value;
});
{
    let object = {};
    finalizationRegistry.register(object, token, token);
    object = undefined;
}
gc();
finalizationRegistry.cleanupSome();
print(cleanedUpValue, token);
print(finalizationRegistry.unregister(token), false);
