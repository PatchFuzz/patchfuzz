




function v_2(
v_3 = class v_4 {
    get [[] = ';']() { }
}
) { }
v_2();


(function f(
v_3 = class v_4 {
    get [{} = ';']() { }
}
) { })();


(function f( {p, q} = class C { get [[] = ';']() {} } ) {})();


class C {};
C[Symbol.iterator] = function() {
  return {
    next: function() { return { done: true }; },
    _first: true
  };
};
(function f1([p, q] = class D extends C { get [[]]() {} }) { })();
