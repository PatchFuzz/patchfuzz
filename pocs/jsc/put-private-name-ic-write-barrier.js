function PutPrivateNameIC() {
    let leak = []

    class A {
        constructor() {
            this.a = 0
        }
    }
    noInline(A)

    class B extends A {
        #b
        #c
    }
    noInline(B)

    for (let i = 0; i < testLoopCount; ++i) {
        let b1 = new B
        let b2 = new B
        let b3 = new B
        leak.push(b1, b2, b3)
    }
}
noInline(PutPrivateNameIC)
PutPrivateNameIC()
