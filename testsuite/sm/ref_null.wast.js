




let $0 = instantiate(`(module
  (func (export "externref") (result externref) (ref.null extern))
  (func (export "funcref") (result funcref) (ref.null func))

  (global externref (ref.null extern))
  (global funcref (ref.null func))
)`);


assert_return(() => invoke($0, `externref`, []), [value('externref', null)]);


assert_return(() => invoke($0, `funcref`, []), [value('anyfunc', null)]);
