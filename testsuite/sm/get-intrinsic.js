
var intrinsic_names = [
    "IsConstructor",    
    "ArrayMap",         
    "localeCache",      
];

for (var name of intrinsic_names) {
    
    assertEq(getSelfHostedValue(name), getSelfHostedValue(name));

    
    for (var newCompartment of [true, false]) {
        let g = newGlobal({newCompartment});
        let a = evaluate(`getSelfHostedValue("${name}")`, { global: g })
        let b = getSelfHostedValue(name);
        assertEq(a === b, false);
    }
}
