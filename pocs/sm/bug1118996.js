g = newGlobal();
gcparam('maxBytes', gcparam('gcBytes'));
try {
    evaluate("return 0", ({
        global: g,
        newContext: true
    }));
} catch (error) {
    
    
    
}
