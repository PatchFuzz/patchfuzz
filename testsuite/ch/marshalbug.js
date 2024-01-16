




const crossSiteDate =
    WScript.LoadScript("var x = new Date()", "samethread").x;


Object.getOwnPropertyNames(Date.prototype)
    .filter(name => !name.match(/^set/))
    .forEach(name => {
        print(name);
        try {
            print(Date.prototype[name].call(crossSiteDate));
        } catch(e) {
            
        }
    });
