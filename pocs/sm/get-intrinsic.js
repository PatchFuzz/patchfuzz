var intrinsic_names = [
    "IsConstructor",    
    "ArrayMap",         
    "globalMapIterationResultPair",  
];

for (var name of intrinsic_names) {
    
    print(getSelfHostedValue(name), getSelfHostedValue(name));

    
    for (var newCompartment of [true, false]) {
        let g = newGlobal({newCompartment});
        let a = evaluate(`getSelfHostedValue("${name}")`, { global: g })
        let b = getSelfHostedValue(name);
        print(a === b, false);
    }
}
