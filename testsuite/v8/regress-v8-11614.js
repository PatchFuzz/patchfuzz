






const fastProps = { key: "abc", ref: 1234, a: 10, b: 20, c: 30, d: 40, e: 50 };

const { key, ref, ...normalizedFastProps } = fastProps;




const slowProps = { [2**30] : 10};
assertTrue(%HasDictionaryElements(slowProps));
const { ...normalizedSlowProps } = slowProps;
