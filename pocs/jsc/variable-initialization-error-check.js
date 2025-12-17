class C0{
    constructor(a2, a3){
        const v4 = this.constructor
        try { new v4() } catch(e){}
        const v6 = []
        const v7 = `
            var __proto__ = v6;
        `
        eval(v7)
    }
}
new C0(C0,C0)
