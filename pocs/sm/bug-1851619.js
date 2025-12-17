enableShellAllocationMetadataBuilder();
var registry = new FinalizationRegistry(()=>{
});
registry.register({}, 1, {});
function recurse(obj) {
    recurse(obj);
}
recurse();
