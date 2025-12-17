function test(supportUnscopables) {
    var env = {x: 1, y: 2};
    Object.defineProperty(env, Symbol.unscopables, {get: function() {
        print(supportUnscopables, true);
        return {x: false, y: true};
    }});

    evaluate(`this.gotX = x; try { this.gotY = y; } catch {}`,
             {envChainObject: env, supportUnscopables});
    print(env.gotX, 1);
    print(env.gotY, supportUnscopables ? undefined : 2);
}
test(false);
test(true);
