let object = print();

object = print(object);
if (!Object.keys(object).includes("testStaticAccessor"))
    throw new Error();
const d = Object.getOwnPropertyDescriptor(object, "testStaticAccessor");
d.enumerable = false;
Object.defineProperty(object, "testStaticAccessor", d);

if (Object.keys(object).includes("testStaticAccessor"))
    throw new Error();

